import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../pages/about/Home/Home';

const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
       
        </div>
    );
};

export default Main;