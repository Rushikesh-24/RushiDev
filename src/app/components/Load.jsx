"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Load = () => {
  return (
    <motion.div
    style={{
        backgroundColor: '#f5efe5',
        width:'100%',
        height:'100vh',
        position: 'fixed',
        zIndex:'9999',
        display: 'flex',
        justifyContent: 'center',
    }}
    initial={{y:0,display:'flex'}}
    animate={{y:'-100vh'}}
    transition={{duration:1.5,delay:0.2,ease:'easeInOut'}}
    exit={{display:'none',opacity:'0'}}
    >
        <img src="/logoB.svg" alt="" className='w-40 mb-20'/>
    </motion.div>
  )
}

export default Load