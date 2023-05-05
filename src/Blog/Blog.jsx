import React from 'react';
import Footer from '../pages/Shared/Footer/Footer';
import pic from '../../src/assets/controlled-and-uncontrolled-components-in-react-thumbnail.webp'
import pic1 from '../../src/assets/images (1).jpg'
import pic2 from '../../src/assets/Implementing-React-Custom-Hooks-A-Complete-Guide.png'
import pic3 from '../../src/assets/Express-JS-vs-Node-JS_-Why-its-Time-to-Migrate_-1.png.webp'
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <div>
            <div className='ml-10 mt-10'>
                <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download Pdf</button>}
                </Pdf>
            </div>
            <div className='grid grid-cols-2 gap-20 ml-60 mr-40 mt-10 mb-10' ref={ref} >

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic} alt="Shoes" className="rounded-xl h-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tell us the differences between uncontrolled and controlled components</h2>
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic1} alt="Shoes" className="rounded-xl h-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">How to validate React props using PropTypes.</h2>
                        <p>React PropTypes validators
                            PropTypes.any : The prop can be of any data type.
                            PropTypes.bool : The prop should be a Boolean.
                            PropTypes.number : The prop should be a number.
                            PropTypes.string : The prop should be a string.
                            PropTypes.func : The prop should be a function.
                            PropTypes.array : The prop should be an array.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic2} alt="Shoes" className="rounded-xl h-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">What is a custom hook, and why will you create a custom hook?</h2>
                        <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={pic3} alt="Shoes" className="rounded-xl h-64" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tell us the difference between nodejs and express js.</h2>
                        <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Blog;