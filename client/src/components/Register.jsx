import React, { useRef, useState } from 'react'
import Header from './Header'
import { ValidateData } from '../utils/validateFormData';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { USER_AVATAR } from '../utils/constants';


const Register = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const dispatch = useDispatch();

    const ToggleSignIn = () => {
        setIsSignIn(!isSignIn);
    }

    const handleValidation = () => {
        // ValidateData()
        // let nameValue = null;
        
        // if (!isSignIn) {
        //     nameValue = name.current.value;
        // }
        
        // console.log("hello");
        const msg = ValidateData( email.current.value, password.current.value);
        setErrorMessage(msg);

        if(msg) return;
        if (!isSignIn) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // once sign in then update user profile 
                    updateProfile(user, {
                        displayName: name.current.value, 
                        photoURL: USER_AVATAR
                      }).then(() => {
                        // Profile updated!
                        // ...
                        const {uid , email , displayName} = user;
                        dispatch(addUser({uid : uid , email:email , displayName : displayName}));
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                      
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
        else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }

    }

    return (
        <div className="">
            <Header />
            <div className="absolute w-screen ">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="absolute login-register-form p-2 text-white h-screen bg-black  mx-auto left-0 right-0 bg-opacity-80 rounded-md ">
                <div className="mt-20 form-title">
                {
                    isSignIn ?
                        <h1 className="text-2xl font-bold  py-5 sm:text-3xl">Sign In</h1> :
                        <h1 className="text-2xl font-bold  py-5 sm:text-3xl">Sign Up</h1>
                }
                </div>

                {
                    !isSignIn &&
                    <input
                        ref={name}
                        type='text'
                        placeholder='Enter name'
                        className=" py-2 my-2 text-sm rounded-md bg-gray-700 w-full sm:py-4"
                    />
                }

                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address or Phone number"
                    className=" py-2 my-2 rounded-md bg-gray-700 w-full sm:py-4"
                />

                <input
                    ref={password}
                    type="password"
                    placeholder='Password'
                    className=" py-2 my-2 rounded-md bg-gray-700 w-full sm:py-4"
                />
                <p className="text-red-600 font-bold text-sm p-2 m-2 sm:text-xl">{errorMessage}</p>
                <button className=" py-2 my-1  bg-red-600 rounded-lg w-full sm:py-4" onClick={handleValidation}>
                    {isSignIn ? "Sign In" : "Sign Up"}
                </button>
                {
                    isSignIn ?
                        <p className="my-2 text-sm sm:text-xl">New to Netflix? <span className="cursor-pointer" onClick={ToggleSignIn}>Sign Up</span></p> :
                        <p className="p-2 m-2">Already a user? <span className="cursor-pointer" onClick={ToggleSignIn}>Sign In</span></p>
                }

            </form>



        </div>
    )
}

export default Register