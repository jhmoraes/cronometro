import React, { useContext } from "react"
import { ControlTimerContainer, InputContainer } from './styledControlTimer'
import { Button } from '../../components/common/styledCommon'
import GlobalStateContext from '../../globalState/GlobalStateContext'


const ControlTimer = () => {

    const { } = useContext(GlobalStateContext)


    return (
        <ControlTimerContainer>

            <InputContainer>
                <input type="number" value="00" />
                <input type="number" value="00" />
                <input type="number" value="00" />
            </InputContainer>

            <Button>Começar</Button>
            <Button>Pausar</Button>
        </ControlTimerContainer>
    )
}

export default ControlTimer