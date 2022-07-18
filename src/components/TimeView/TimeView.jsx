import React, {useContext} from "react"
import { ChronometerContainer, ChronometerProgressLine } from "./styledTimeView"
import GlobalStateContext from '../../globalState/GlobalStateContext'


const TimeView = () =>{

    const {secTime, minTime, hourTime} = useContext(GlobalStateContext)


    return(
        <ChronometerContainer>
            <ChronometerProgressLine>
                {hourTime <= 9? <p>0{hourTime}:</p> : <p>{hourTime}:</p>}
                {minTime <= 9? <p>0{minTime}:</p> : <p>{minTime}:</p>}
                {secTime <= 9? <p>0{secTime}</p>: <p>{secTime}</p>}
                
            </ChronometerProgressLine>           
            
        </ChronometerContainer>
    )
}

export default TimeView