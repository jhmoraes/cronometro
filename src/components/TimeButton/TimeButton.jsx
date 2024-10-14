import React, {useContext} from "react"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import {TimeButtonContainer} from './styleTimeButton'



export const TimeButtonSec = () =>{

    const {buttonUpper, buttonLower, setSecTime, secTime } = useContext(GlobalStateContext)

    return(
        <TimeButtonContainer>
            <p>Sec</p>
            <button onClick={()=>buttonUpper(setSecTime, secTime)}>+</button>
            <button onClick={()=>buttonLower(setSecTime, secTime)}>-</button>  
        </TimeButtonContainer>
    )
}


export const TimeButtonMin = () =>{

    const {buttonUpper, buttonLower, minTime, setMinTime} = useContext(GlobalStateContext)

    return(
        <TimeButtonContainer>
            <p>Min</p>
            <button onClick={()=>buttonUpper(setMinTime, minTime)}>+</button>
            <button onClick={()=>buttonLower(setMinTime, minTime)}>-</button>  
        </TimeButtonContainer>
    )
}

export const TimeButtonHour = () =>{

    const {buttonUpper, buttonLower, hourTime, setHourTime} = useContext(GlobalStateContext)

    return(
        <TimeButtonContainer>
            <p>Hr</p>
            <button onClick={()=>buttonUpper(setHourTime, hourTime)}>+</button>
            <button onClick={()=>buttonLower(setHourTime, hourTime)}>-</button>  
        </TimeButtonContainer>
    )
}
