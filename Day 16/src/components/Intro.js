import React, {useState, useRef, useEffect} from 'react'
import gsap from 'gsap'

const Intro = ({onFinish}) => {

    const bg = useRef();
    const container = useRef();
    const logo = useRef();
    const text = useRef();

    useEffect(()=>{

        const tl = gsap.timeline({
            onComplete: onFinish,
        })

        tl.from(bg.current,{
            opacity:0,
            duration:0.6
        })

        .from(logo.current, {
            scale: 0,
            rotation: 180,
            duration: 0.8,
            ease: "back.out(1.7)",
        })

        .from(text.current, {
            y: 50,
            opacity: 0,
            duration: 0.5,
        })

        .to(container.current, {
            clipPath: "inset(0 0 100% 0)",
            duration: 1,
            ease: "power4.inOut",
            delay: 0.5,
        });

    },[])

  return (
    <div ref={container} className='fixed inset-0 bg-black flex flex-col justify-center items-center text-white z-50'>

        <h1 ref={logo} className="text-6xl font-bold">Swiftcart</h1>

        <p ref={text} className="mt-4 text-xl tracking-wide">Premium Shopping Experience</p>

    </div>
  )
}

export default Intro