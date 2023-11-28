"use client"
import { useEffect, useState } from 'react';

const Loader = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const loaderContainerStyle = {
    position: 'fixed',
    bottom: animate ? '100%' : '0', 
    left: '0',
    transition: 'bottom 1s ease-in-out',
    textAlign: 'center',
    zIndex:"999",
    width: '100%',
  };
   const container={
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f5efe5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', 
    position: 'relative',
   }
  return (
    <>
    <div style={loaderContainerStyle}>
      <div style={container}><img src="/logoB.svg" alt="logo" className='mb-5 w-40'/></div>
      <img src="/bottom.svg" alt="" className=''/>
    </div>
    </>
  );
};

export default Loader;
