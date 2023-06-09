import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../../src/assets/logo.png'
import Active from '../../Active/Active';
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div>
            <nav className="navbar bg-cyan-50 pr-20 pl-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Active to="/">Home</Active></li>
                            <li><Active to="/blog">Blog</Active></li>

                        </ul>
                    </div>
                    <img className='h-16' src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Active to="/">Home</Active></li>
                        <li><Active to="/blog">Blog</Active></li>
                    </ul>
                </div>

                {user ?
                    <div className=" ml-96">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full" title={user?.displayName}>
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul>   <li onClick={handleLogOut}> <Active>Logout</Active> </li></ul>

                    </div>
                    :
                    <li><Active to="/login">Login</Active></li>

                }
            </nav>
        </div>
    );
};

export default NavigationBar;