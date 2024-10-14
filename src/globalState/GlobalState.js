import React, { useEffect, useState } from "react";
import GlobalStateContext from "./GlobalStateContext";


const GlobalState = (props) => {

    //estado do tempo
    const [secTime, setSecTime] = useState(0)
    const [minTime, setMinTime] = useState(0)
    const [hourTime, setHourTime] = useState(0)

    //estado start cronometro, timer e gym
    const [isChronometerStart, setIsChronometerStart] = useState(false)
    const [isGymStart, setIsGymStart] = useState(false)
    const [isTimerStart, setIsTimerStart] = useState(false)
    
    //opção de pausa
    const [isPaused, setIsPaused] = useState(true)
    
    //estados gym
    const [rounds, setRounds] = useState(0)
    const [durationSec, setDurationSec] = useState(0)
    const [breakSec, setBreakSec] = useState(0)
    const [isInfo, setIsInfo] = useState('')
    const [interval, setInterval] = useState(false)
    const [firstRound, setFirstRound] = useState(false)

    //estado opções de timer
    const [isOptions, setIsOptions] = useState('cronometro')


    useEffect(() => {

        
        if (isChronometerStart && isPaused === false) {
            startTime()
        }

        if (isTimerStart && isPaused === false) {
            startTimer()
        }

        if (isGymStart && isPaused === false) {
            startGym()
            goRounds()
        }


    }, [isPaused, isChronometerStart, secTime, isTimerStart, isGymStart])

    //start cronometro
    const startTime = () => {
        setTimeout(() => {
            if (secTime === 59) {
                setSecTime(0)
                if (minTime === 59) {
                    setMinTime(0)
                    setHourTime((hourTime) => hourTime + 1)
                } else {
                    setMinTime((minTime) => minTime + 1)
                }

            } else {
                setSecTime((secTime) => secTime + 1)
            }

        }, 1000)
    }

    //start contagem regressiva

    const startTimer = () => {

        setTimeout(() => {

            if (secTime === 0 && minTime === 0 && hourTime === 0) {
                setIsPaused(true)
                console.log('o tempo acabou')
            }

            if (secTime >= 0 && secTime <= 59) {
                if (secTime === 0) {
                    if (minTime > 0 || hourTime > 0) {
                        setSecTime(59)
                        if (minTime === 0 && hourTime > 0) {
                            setMinTime(59)
                            setHourTime((hourTime) => hourTime - 1)
                        }
                        setMinTime((minTime) => minTime - 1)
                    }
                }
                if (secTime > 0) {
                    setSecTime((secTime) => secTime - 1)
                }
            }
        }, 1000)

    }

    //console.log(isGymStart)
    const startGym = () => {
        if (!firstRound) {
            setSecTime(durationSec)
            setIsInfo('Go')
        }

    }

    const goRounds = () => {

        if(firstRound) {
            setTimeout(() => {   
                setIsInfo('') 
                if (rounds > 0) {
                    if (interval === false) {
                        if (secTime > 0) {
                            setIsInfo('Go')
                            setSecTime((secTime) => secTime - 1)
                            
                        }
                        if(secTime === 0){
                            setInterval(true)
                            setIsInfo('Stop')
                            setSecTime(breakSec)
                        }
                    }   
                    
                    if(interval){
                        if (secTime > 0) {
                            setIsInfo('Stop')
                            setSecTime((secTime) => secTime - 1)
                        }

                        if (secTime === 0) {
                            setInterval(false)
                            setRounds((rounds) => rounds - 1)

                            if(rounds > 1){
                                console.log("entrou")
                                setIsInfo('Go')
                                setSecTime(durationSec)
                            }
                            console.log("rounds", rounds)
    
                        }
                    }
                }
            }, 1000)
        } 
        
        setFirstRound(true)

    }

    const alternateStart = () => {
        console.log('chamou alternateStart')
        setIsChronometerStart(true)
        setIsPaused(false)
    }

    const alternatePaused = () => {
        setIsPaused(true)
    }

    const restore = () => {
        setSecTime(0)
        setMinTime(0)
        setHourTime(0)
        setDurationSec(0)
        setInterval(false)
        setBreakSec(0)
        setRounds(0)
        setIsChronometerStart(false)
        setIsGymStart(false)
        setIsTimerStart(false)
        setIsInfo('')
        setFirstRound(false)
    }

    const alternateStartTimer = () => {
        setIsTimerStart(true)
        setIsPaused(false)
    }

    const alternateGym = () => {
        setIsGymStart(true)
        setIsPaused(false)
    }

    //função cronometro, timer e gym

    const stopwatch = () => {
        setIsOptions('cronometro')
        restore()
    }

    const timer = () => {
        setIsOptions('timer')
        restore()
    }

    const gym = () => {
        setIsOptions('gym')
        restore()
    }

    //input controlado timer

    const onChangeHour = (event) => {
        setHourTime(Number(event.target.value))
    }

    const onChangeMin = (event) => {
        setMinTime(Number(event.target.value))
    }

    const onChangeSec = (event) => {
        setSecTime(Number(event.target.value))
    }

    //input controlado gym

    const onChangeRound = (event) => {
        setRounds(Number(event.target.value))
    }

    const onChangeDuration = (event) => {
        setDurationSec(Number(event.target.value))
    }

    const onChangeBreak = (event) => {
        setBreakSec(Number(event.target.value))
    }

    //função somar e subtrair tempo

    const buttonUpper = (setTime, time) => {
            if(time >= 0 && time < 59){
                setTime((time) => time + 1)
            }
    }

    const buttonLower = (setTime, time) => {
        if(time > 0){
            setTime((time) => time - 1)
        }
    }


    const data = { restore, alternatePaused, alternateStart, secTime, minTime, hourTime, stopwatch, timer, gym, onChangeHour, onChangeMin, onChangeSec, alternateStartTimer, onChangeRound, onChangeDuration, onChangeBreak, breakSec, durationSec, rounds, alternateGym, isOptions, isInfo, buttonUpper, buttonLower, setSecTime, setMinTime, setHourTime}



    return (
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}

export default GlobalState