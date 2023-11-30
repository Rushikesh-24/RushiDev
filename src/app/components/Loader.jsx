"use client"
import { useEffect, useState } from 'react';

const Loader = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const loaderContainerStyle = {
    position: 'fixed',
    bottom: animate ? '120vh' : '0', 
    left: '0',
    transition: 'bottom 1.5s ease-in-out',
    textAlign: 'center',
    zIndex:"999",
    width: '100%',
    height:'120vh'
  };
   const container={
    width: '100vw',
    height: '100%',
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
      <div style={container}><img src="/logoB.svg" alt="logo" className='w-40'/></div>
      <img src="/bottom.svg" alt="" className=''/>
    </div>
    </>
  );
};

export default Loader;
