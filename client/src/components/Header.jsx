import React, { useState, useEffect } from 'react';
import appStore from '../utils/appStore';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_AVATAR } from '../utils/constants';
// import store from "../utils/appStore"

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // if user signs up or sign in 
        const {uid , email , displayName} = user;
        dispatch(addUser({uid : uid , email:email , displayName : displayName}));
        navigate('/browse');
      } else {
        // if User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  },[])


 const handleSignOut = () =>{
  signOut(auth).then(() => {
      navigate("/");
  }).catch((error) => {
  });
 }


  return (
    <div className="flex justify-between z-10 w-full absolute bg-gradient-to-b from-black">
      <div className=" px-10">
        <img
          className="w-20 md:w-44 my-5"
          src={LOGO}
          alt=""
        />
      </div>
      {
        user && 
        <div className="flex items-center p-2 gap-2">
          <h3 className="font-bold text-white text-sm-xl md:text-2xl px-4 " >{user?.displayName}</h3>
        <img 
          className="w-7 sm:w-10 sm:h-10"
        src={USER_AVATAR} alt="" />
        <button 
          onClick={handleSignOut}
        className="text-white font-bold text-sm-xl ">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
