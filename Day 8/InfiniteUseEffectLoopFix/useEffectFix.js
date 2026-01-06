import { useEffect, useState } from "react"

// Error
function Counter(){

    const [ count , setCount ] = useState(0)

    useEffect(()=>{
        setCount(count + 1)
    },[count]) // Infinite Loop

    return <h1>{count}</h1>
}
Counter()

// ---------------------------------------------------- //

// Fix
function Counter1(){

    const [ count , setCount ] = useState(0)

    useEffect(()=>{
        setCount( prev => prev+1)
    },[]) // Runs Once

    return <h1>{count}</h1>
}
Counter1()