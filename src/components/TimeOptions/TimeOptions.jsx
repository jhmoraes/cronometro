import React, {useContext} from "react"
import { OptionTimesContainer } from "./styledTimeOptions"
import GlobalStateContext from '../../globalState/GlobalStateContext'
import gymImg from '../../img/gym.png'
import timerImg from '../../img/timer.png'
import hourglassImg from '../../img/hourglass.png'


const TimeOptions = () =>{

    const {stopwatch, timer, gym,} = useContext(GlobalStateContext)

    return(
        <OptionTimesContainer>
                <img src={timerImg} onClick={stopwatch}/>
                <img src={hourglassImg} onClick={timer}/>
                <img src={gymImg} onClick={gym}/>
        </OptionTimesContainer>
    )
}

export default TimeOptions