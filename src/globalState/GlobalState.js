import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

    const [secTime, setSecTime] = useState(0)
    const [minTime, setMinTime] = useState(0)
    const [hourTime, setHourTime] = useState(0)
    const [isStart, setIsStart] = useState(false)
    const [isPaused, setIsPaused] = useState(true)
    const [isCronometro, setIsCronometro] = useState(true)
    const [isTimer, setIsTimer] = useState(false)
    const [isGym, setIsGym] = useState(false)


    useEffect(() => {     

        if (isStart && isPaused === false) {
            startTime()
        }

    }, [isStart, isPaused, secTime])

    const startTime = () => {
        setTimeout(() => {
            if (secTime === 59) {
                setSecTime(0)
                if (minTime === 59) {
                    setMinTime(0)
                    setHourTime((hourTime) => hourTime + 1)                    
                }else{
                    setMinTime((minTime) => minTime + 1)
                }
                
            } else {
                setSecTime((secTime) => secTime + 1)
            }

        }, 1000)
    }

    const alternateStart = () => {
        setIsStart(true)
        setIsPaused(false)
    }

    const alternatePaused = () => {
        setIsPaused(true)
    }

    const restore = () =>{
        setSecTime(0)
        setMinTime(0)
        setHourTime(0)
    }

    //função cronometro, timer e gym

    const stopwatch = () =>{
        setIsCronometro(true)
        setIsTimer(false)
        setIsGym(false)

        console.log('clicou')
    }

    const timer = () =>{
        setIsCronometro(false)
        setIsTimer(true)
        setIsGym(false)
    }

    const gym = () =>{
        setIsCronometro(false)
        setIsTimer(false)
        setIsGym(true)
    }


    //console.log(isStart, isPaused, secTime, minTime, hourTime)

    console.log(isCronometro, isTimer, isGym)


    const data = { restore, alternatePaused, alternateStart, secTime, minTime, hourTime, isCronometro, isTimer, isGym, stopwatch, timer, gym}



    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState