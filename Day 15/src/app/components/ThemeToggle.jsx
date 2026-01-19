"use client"
import React, { useEffect, useState } from 'react'

function ThemeToggle() {
    const [dark, setDark] = useState(false)


    useEffect(()=>{
        const saved = localStorage.getItem("theme")
        if(saved === "dark"){
            document.documentElement.setAttribute("data-theme","dark");
            setDark(true)
        }
    },[])

    const toggleTheme=()=>{
        if(dark){
            document.documentElement.removeAttribute("data-theme")
            localStorage.setItem("theme","light")
            setDark(false)
        } else {
            document.documentElement.setAttribute("data-theme","dark")
            localStorage.setItem("theme","dark")
            setDark(true)
        }
    }

  return (
    <button onClick={toggleTheme} className='px-4 py-2 border-none rounded-lg bg-[var(--primary)] text-white cursor-pointer'>
      {dark ? "Dark" : "Light"}
    </button>
  )
}

export default ThemeToggle
