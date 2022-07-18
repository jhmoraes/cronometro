import React, {useContext} from "react"
import { MainScreenContainer, MainScreenLayoutContainer } from './syledMainScreen'
import Control from '../../components/ControlChronometer/ControlChronometer'
import Chronometer from '../../components/TimeView/TimeView'
import OptionTimes from '../../components/TimeOptions/TimeOptions'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import ControlTimer from '../../components/ControlTimer/ControlTimer'
import ControlGym from '../../components/ControlGym/ControlGym'


const MainScreen = () =>{

    const {isCronometro, isTimer, isGym} = useContext(GlobalStateContext)

    return(
        <MainScreenContainer>
            <MainScreenLayoutContainer>
                <Chronometer></Chronometer>
                {isCronometro? <Control/> : isTimer? <ControlTimer/>: isGym? <ControlGym/> : <Control/> }
                <OptionTimes/>
            </MainScreenLayoutContainer>
            
        </MainScreenContainer>
    )
}

export default MainScreen