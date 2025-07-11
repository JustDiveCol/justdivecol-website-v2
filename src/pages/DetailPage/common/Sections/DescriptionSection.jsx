import React from 'react';

const DescriptionSection = () => {
  return (
    <section>
      <h2 className='text-3xl font-sans font-bold text-brand-white mb-4'>
        {/* {description.title} */}
        Description Title
      </h2>
      <div className='space-y-4 font-serif text-lg text-brand-neutral/90'>
        {/* {description.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))} */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, minus
        eum. Ut laborum reprehenderit asperiores itaque. Doloribus debitis
        quidem repellendus minus obcaecati, dolorem accusamus ipsa placeat, ea
        officia architecto id.
      </div>
    </section>
  );
};

export default DescriptionSection;
