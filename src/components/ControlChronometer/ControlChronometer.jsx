import React, {useContext} from "react"
import { ControlContainer} from './styledControlChronometer'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { Button } from '../../components/common/styledCommon'


const ControlChronometer = () =>{

    const {alternatePaused, restore, alternateStart} = useContext(GlobalStateContext)
    return(
        <ControlContainer>
            <Button onClick={alternateStart}>Iniciar</Button>
            <Button onClick={alternatePaused}>Pausar</Button>
            <Button onClick={restore}>Restaurar</Button>
        </ControlContainer>
        
    )
}

export default ControlChronometer