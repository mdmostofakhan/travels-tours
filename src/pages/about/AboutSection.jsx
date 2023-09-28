import React from 'react';

const AboutSection = ({ newtitle}) => {
  
    return (
        <div>
            <h1 className='text-3xl text-center text-primary py-10'>{ newtitle}</h1>
        </div>
    );
};

export default AboutSection;