"use client"
import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import PageTransition from '@/components/pageTransition'
import Intro from '@/components/Intro'

const Login = () => {
  
  const router = useRouter()

  const [leaving, setLeaving] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const handleLogin=()=>{
    setLeaving(true)
    setTimeout(()=>{ router.push("/dashboard") },600);
  }

  return (

    <>

    { showIntro && <Intro onFinish={()=> setShowIntro(false)}/>}

    { !showIntro && (

      <AnimatePresence>
    { !leaving && (
      <motion.div
        initial={{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:-50}}
        transition={{duration:0.4}}
        className='h-screen flex items-center justify-center bg-gray-100'
      >
          <div className="bg-white p-10 rounded-xl shadow-lg">

            <h2 className="text-2xl mb-4">Login</h2>

            <button
              onClick={handleLogin}
              className="bg-black text-white px-6 py-2 rounded"
            >
              Login
            </button>

          </div>

      </motion.div>
    ) }

    {leaving && <PageTransition/> }

    </AnimatePresence>

    )}

    </>
  )
}

export default Login