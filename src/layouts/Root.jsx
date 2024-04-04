import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='font-poppins max-w-6xl md:w-[83%] px-4 md:px-0  mx-auto'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;