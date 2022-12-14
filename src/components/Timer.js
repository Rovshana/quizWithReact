import React from 'react'
import { useEffect, useState } from 'react'

export function Timer({setStop, questionNum}) {
    const [timer, setTimer] = useState(30)
    
useEffect(() => {
    if(timer === 0) return setStop(true)
    
    const interval = setInterval(()=>{
setTimer(prev=>prev === 0? 0 : prev - 1)
    }, 1000)
    return ()=> clearInterval(interval)
}, [setStop, timer])
useEffect(()=>{
    setTimer(30)
}, [questionNum])
    return timer
}
