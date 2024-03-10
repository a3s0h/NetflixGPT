import React, { useState, useEffect } from 'react';
import appStore from '../utils/appStore';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import store from "../utils/appStore"

const Header = () => {
  const [showImage, setShowImage] = useState(true);
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
 

 const handleSignOut = () =>{
  signOut(auth).then(() => {
      navigate("/");
  }).catch((error) => {
    
  });
 }


  return (
    <div className="flex justify-between z-10 w-full absolute bg-gradient-to-b from-black">
      <div className="w-full px-10">
        <img
          className="w-44 my-5"
          style={{ display: showImage ? 'block' : 'none' }}
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
        />
      </div>
      {
        user && 
        <div className="flex items-center p-2">
          <h3 className="font-bold text-white text-2xl px-4 border-b-2" >{user.displayName}</h3>
        <img 
          className="w-10 h-10"
        src="https://cdn.icon-icons.com/icons2/2619/PNG/96/among_us_netflix_icon_156927.png" alt="" />
        <button 
          onClick={handleSignOut}
        className="text-white font-bold ">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
