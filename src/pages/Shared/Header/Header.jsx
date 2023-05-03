import React from 'react';
import img from '../../../assets/header.jpg'
const Header = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Organic natural food</h1>
                        <p className="mb-5">no matter how you cook, Yumma has many the recipes.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;