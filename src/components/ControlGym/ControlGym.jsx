import React, { useContext } from "react"
import { ControlGymContainer } from './styledControlGym'
import { Button } from '../common/styledCommon'
import GlobalStateContext from '../../globalState/GlobalStateContext'


const ControlGym = () => {

    const { rounds, durationSec, breakSec, onChangeRound, onChangeDuration, onChangeBreak, alternateGym, alternatePaused, restore} = useContext(GlobalStateContext)

    return (
        <ControlGymContainer>
            <label>Rounds
                <input
                    type="number"
                    value={rounds}
                    onChange={onChangeRound}
                    min="0"
                    max="90"
                />
            </label>

            <label>Go
                <input
                    type="number"
                    value={durationSec}
                    onChange={onChangeDuration}
                    min="0"
                    max="59"
                />
                
            </label>

            <label>Stop
                <input
                    type="number"
                    value={breakSec}
                    onChange={onChangeBreak}
                    min="0"
                    max="59"
                />
            </label>
            <Button onClick={alternateGym}>Iniciar</Button>
            <Button onClick={alternatePaused}>Pausar</Button>
            <Button onClick={restore}>Zerar</Button>

        </ControlGymContainer>

    )
}

export default ControlGym