import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='text-xl font-semibold mt-4 ml-4'>
            <Link to="/about">ABOUT US</Link>
          
        </div>
    );
};

export default Home;