import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase/firebase.config';



const GoogleAndGit = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser);
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        // const navigate = useNavigate();

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                // navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }

    // const handleSignOut = () => {
    //     signOut(auth)
    //         .then(result => {
    //             console.log(result);
    //             setUser(null);
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    return (
        <div>

            {
                user ?
                    <button onClick={handleSignOut}>Sign out</button> :
                    <>
                        <div className="social-button-container w-55 mt-3">
                            <img
                                onClick={handleGoogleSignIn}
                                className=" social-button"
                                src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                                alt=""
                            />
                        </div>
                        <div className="">
                            <img
                                onClick={handleGithubSignIn}
                                className=" social-button"
                                src="https://i.ibb.co/g9f4P0S/github-btn.png"
                                alt=""
                            />
                        </div>
                    </>
            }
            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>
            }
        </div>
    );
};

export default GoogleAndGit;