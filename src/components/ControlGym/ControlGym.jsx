import React, {useContext} from "react"
import { ControlGymContainer} from './styledControlGym'
import {Button} from '../common/styledCommon'
import GlobalStateContext from '../../globalState/GlobalStateContext'


const ControlGym = () =>{

    const {} = useContext(GlobalStateContext)

    return(
        <ControlGymContainer>
            <label>Rodadas <input/> </label>
            <label>Duração <input/> </label>
            <label>Descanço <input/> </label>
            <Button>Iniciar</Button>
            <Button>Pausar</Button>
            <Button>Parar</Button>

        </ControlGymContainer>
        
    )
}

export default ControlGym