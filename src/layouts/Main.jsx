import React from 'react';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Login from '../pages/Login/Login/Login';
import Register from '../pages/Login/Register/Register';
import About from '../About/About';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Header></Header>
            <Outlet></Outlet>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Main;