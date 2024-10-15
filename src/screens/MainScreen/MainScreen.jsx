import React, { useContext } from "react"
import { MainScreenContainer, MainScreenLayoutContainer, ContainerCronometer } from './syledMainScreen'
import Control from '../../components/ControlChronometer/ControlChronometer'
import Chronometer from '../../components/TimeView/TimeView'
import OptionTimes from '../../components/TimeOptions/TimeOptions'
import GlobalStateContext from '../../globalState/GlobalStateContext'
import ControlTimer from '../../components/ControlTimer/ControlTimer'
import ControlGym from '../../components/ControlGym/ControlGym'



const MainScreen = () => {

    const { isOptions } = useContext(GlobalStateContext)

    return (
        <MainScreenContainer>
            <div>
                <MainScreenLayoutContainer>
                    <ContainerCronometer>
                        <Chronometer />
                    </ContainerCronometer>

                    {isOptions === 'cronometro' ? <Control /> : isOptions === 'timer' ? <ControlTimer /> : isOptions === 'gym' ? <ControlGym /> : <Control />}
                    <OptionTimes />
                </MainScreenLayoutContainer>
            </div>

        </MainScreenContainer>
    )
}

export default MainScreen