import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from '../../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';

const Terms = () => {
    return (
        <div>
            <div className='m-10'>
                <h2>Terms and conditions</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione veritatis hic perferendis, mollitia non nostrum molestiae facere possimus autem fuga corrupti omnis rem voluptates veniam accusantium vero repudiandae ipsa.</p>
                <p>Go back to <span className='text-primary'><Link to="/register">Register</Link></span> </p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Terms;