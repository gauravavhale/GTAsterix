"use client"
import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { motion } from 'framer-motion'

function Dashboard() {

  const [open,setOpen] = useState(false);

  return (
    <motion.div
        key="dashboard"
        initial={{ clipPath: "inset(0 0 100% 0)" }}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className='h-screen flex flex-col items-center justify-center'
    >
      <button className='bg-black text-white px-2 py-2 rounded ' onClick={()=> setOpen(!open)}>
        ☰ Menu
      </button>
      <Sidebar isOpen={open} setOpen={setOpen} />
      <div className='text-3xl font-bold'>Welcome to Dashboard</div>
      <p>This is a smooth transition Page</p>

    </motion.div>
  )
}

export default Dashboard;