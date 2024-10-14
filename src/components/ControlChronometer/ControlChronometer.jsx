import React, {useContext} from "react"
import { ControlContainer} from './styledControlChronometer'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import { Button } from '../../components/Common/styledCommon'
import botaoPlay from '../../img/botaoPlay.png'
import pausa from '../../img/pausa.png'
import restaurar from '../../img/restaurar.png'


const ControlChronometer = () =>{

    const {alternatePaused, restore, alternateStart} = useContext(GlobalStateContext)
    return(
        <ControlContainer>
            <Button onClick={alternatePaused}><img src={pausa}/></Button>
            <Button onClick={alternateStart}><img src={botaoPlay}/></Button>
            <Button onClick={restore}><img src={restaurar}/></Button>
        </ControlContainer>
        
    )
}

export default ControlChronometer