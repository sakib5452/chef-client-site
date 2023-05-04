import React from 'react';
import NavigationBar from '../pages/NavigationBar/NavigationBar';
import Footer from '../pages/Shared/Footer/Footer';

const Blog = () => {
    return (
        <div>

            <div className='grid grid-cols-2 gap-2 ml-14 mt-6 mb-10'>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Tell us the differences between uncontrolled and controlled components.

                            </h2>
                            <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">How to validate React props using PropTypes.

                            </h2>
                            <p>React PropTypes validators
                                PropTypes.any : The prop can be of any data type.
                                PropTypes.bool : The prop should be a Boolean.
                                PropTypes.number : The prop should be a number.
                                PropTypes.string : The prop should be a string.
                                PropTypes.func : The prop should be a function.
                                PropTypes.array : The prop should be an array.</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Tell us the difference between nodejs and express js.

                            </h2>
                            <p>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses..</p>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">What is a custom hook, and why will you create a custom hook?

                            </h2>
                            <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>

                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Blog;