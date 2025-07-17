// scripts/version-bumper.js
import fs from 'fs';
import path from 'path';

// Determina qué parte de la versión se va a incrementar (major, minor, o patch)
// Se toma del primer argumento que se le pasa al script.
const partToIncrement = process.argv[2];

if (!['major', 'minor', 'patch'].includes(partToIncrement)) {
  console.error(
    'Error: Debes especificar qué parte de la versión incrementar.'
  );
  console.log('Uso: node version-bumper.js [major|minor|patch]');
  process.exit(1); // Termina el script con un código de error
}

const packageJsonPath = path.resolve(process.cwd(), 'package.json');

try {
  // Lee el contenido del package.json
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);
  const currentVersion = packageJson.version;

  // Separa la versión en sus componentes numéricos
  let [major, minor, patch] = currentVersion.split('.').map(Number);

  // Incrementa la parte correspondiente según el argumento
  switch (partToIncrement) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
  }

  // Construye la nueva cadena de versión
  const newVersion = `${major}.${minor}.${patch}`;

  // Actualiza el objeto JSON en memoria
  packageJson.version = newVersion;

  // Escribe el archivo package.json actualizado, manteniendo el formato
  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2) + '\n'
  );

  console.log(`Versión actualizada de ${currentVersion} a ${newVersion}`);
} catch (error) {
  console.error('Error al actualizar la versión:', error);
  process.exit(1);
}
