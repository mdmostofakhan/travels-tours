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



// btn,,,,,,,,,,,,,,,,,,,,,,,,,,,,,/

// .btn-animation{
//     position: relative;
// }

// .btn-animation::before{
//     content: '';
//     position: absolute;
//     transition: all 0.3s;
   
//     /* background-color: red; */
//     left: 45%;
//     width: 10%;
//     height: 100%;
//     bottom: 0px;
// }

// .btn-animation:hover::before {
//     /* content: "THINGS TO DO"; */
//     width: 100%;
//     background-color: black;
//     left: 0px;
//     color: white;
//     overflow: hidden;
    
// } 