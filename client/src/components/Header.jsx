import React, { useState, useEffect } from 'react';

const Header = () => {
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowImage(window.innerWidth >= 768); // Adjust the width as needed
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="z-10 w-full absolute bg-gradient-to-b from-black">
      <div className="w-full px-10">
        <img
          className="w-44 my-5"
          style={{ display: showImage ? 'block' : 'none' }}
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
