import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../assets/Login.jpg'
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setSuccess('')
        setError('')


        if (!/(?=.*?[A-Z])/.test(password)) {
            setError('Please add at least one uppercase')
            return
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;

                console.log(createdUser);
                setError('');
                event.target.reset();
                setSuccess('User has created Success')
            })
            .catch(error => {
                console.error(error.message);
                setError(error.message);
                event.target.reset();
            })
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }


    return (
        <div className='mb-28 mt-28'>
            <h1 className="text-5xl font-bold text-center">Register Now!!</h1>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className=''>
                            <img className='h-96 rounded-lg' src={pic} alt="" />
                        </div>
                    </div>
                    <form onSubmit={handleRegister} className="card flex-shrink-0 w-full max-w-sm  shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Enter email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Enter password" name='password' className="input input-bordered" required />
                            </div>
                            <p className='text-red-500 text-center'>{error}</p>
                            <p className='text-success'>{success}</p>
                            <div className="form-control">
                                <label className="label">
                                    <input onClick={handleAccepted} type="checkbox" name="accept" />
                                    <span className="label-text mr-28">{<>Accept <span className='text-primary'><Link to="/terms">Terms and Conditions</Link></span> </>}</span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" disabled={!accepted}> Register</button>
                            </div>
                            <h4>  Already Have an Account? <span className='text-primary'><Link to="/login">Login</Link></span></h4>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;