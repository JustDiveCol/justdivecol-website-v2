// scripts/interactive-release.js

const readline = require('readline');
const { execSync } = require('child_process');

// Colors for the console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

async function runReleaseProcess() {
  try {
    console.log(
      colors.yellow,
      '--- Starting interactive release process ---',
      colors.reset
    );

    // 1. Ask for the commit message
    const commitMessage = await question('💬 Enter your commit message: ');
    if (!commitMessage) {
      throw new Error('Commit message cannot be empty.');
    }

    // 2. Add and commit
    console.log('✅ Staging files (git add .)...');
    execSync('git add .');
    console.log('✅ Creating commit...');
    execSync(`git commit -m "${commitMessage}"`);
    console.log(colors.green, 'Commit created successfully.', colors.reset);

    // 3. Ask for the version type
    const versionType = await question(
      '🚀 What type of version is this? (patch, minor, major): '
    );
    if (!['patch', 'minor', 'major'].includes(versionType)) {
      throw new Error('Invalid version type. Must be patch, minor, or major.');
    }

    // 4. Run npm version and push changes
    console.log(`✅ Bumping version (${versionType})...`);
    // Use --no-git-tag-version to prevent npm from creating its own commit and tag
    const newVersion = execSync(
      `npm version ${versionType} --no-git-tag-version`
    )
      .toString()
      .trim();

    // Manually commit the version bump and create the tag
    execSync(`git commit -am "chore(release): Version ${newVersion}"`);
    execSync(`git tag ${newVersion}`);

    console.log('✅ Pushing changes (git push)...');
    execSync('git push');
    execSync('git push --tags');

    console.log(
      colors.green,
      `\n🎉 Release complete! Version ${newVersion} has been published.`,
      colors.reset
    );
  } catch (error) {
    console.error(
      colors.red,
      '\n❌ Error during the release process:',
      colors.reset
    );
    console.error(error.message);
    process.exit(1); // Exit with an error code
  } finally {
    rl.close();
  }
}

runReleaseProcess();
