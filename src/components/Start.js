import React, { useRef } from 'react'
import useSound from 'use-sound'
import startSound from '../assets/startSound.mp3'
export function Start({setUser}) {
    const [start] = useSound(startSound)
    const inputRef = useRef()
const handleClick = ()=>{
 inputRef.current.value && setUser(inputRef.current.value)
 start()
}
    return (
        <div className='startVital'>
        <div className='start'>
        <input placeholder='enter your name' className='startInput' 
        ref={inputRef}
        />
        <button className='startButton' onClick={handleClick}>Start</button>
            
        </ div>
        </div>
    )
}
