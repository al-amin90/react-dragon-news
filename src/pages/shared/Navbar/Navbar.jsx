import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
import defaultUser from "../../../assets/user.png"
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/Provider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSingOut = () => {
        logOut()
            .then(result => console.log("successfully log out"))
    }

    const navLinks = < >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/career">Career</Link></li>
    </>

    return (
        <div className="navbar mt-4 p-0 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2" >
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={defaultUser} />
                    </div>
                </div>
                {
                    user ? <Link>
                        <Button onClick={handleSingOut} className='bg-[#403f3f] py-2 rounded-none px-8 font-semibold'>Log Out
                        </Button>
                    </Link>
                        : <div>
                            <Link to="/login">
                                <Button className='bg-[#403f3f] py-2 rounded-none px-8 font-semibold mr-3'>Login
                                </Button>
                            </Link>
                            <Link to="/singup">
                                <Button className='bg-[#403f3f] py-2 rounded-none px-8 font-semibold'>Sing Up
                                </Button>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;