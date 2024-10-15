import React, { useContext } from "react"
import { ControlTimerContainer, InputContainer, ButtonContainer } from './styledControlTimer'
import { Button } from '../common/styledCommon'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { TimeButtonSec, TimeButtonMin, TimeButtonHour } from '../../components/TimeButton/TimeButton'
import pausa from '../../img/pausa.png'
import botaoPlay from '../../img/botaoPlay.png'


const ControlTimer = () => {

    const { onChangeHour, onChangeMin, onChangeSec, secTime, minTime, hourTime, alternateStartTimer, alternatePaused } = useContext(GlobalStateContext)


    return (
        <ControlTimerContainer>

            <InputContainer>
                <TimeButtonHour />
                <TimeButtonMin />
                <TimeButtonSec />
            </InputContainer>

            <ButtonContainer>
                <button onClick={alternateStartTimer}><img src={botaoPlay}/></button>
                <button onClick={alternatePaused}><img src={pausa}/></button>
            </ButtonContainer>
        </ControlTimerContainer>
    )
}

export default ControlTimer