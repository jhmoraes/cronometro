import styled from "styled-components"

export const ControlTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 30%;
    width: 70%;
    //background-color: antiquewhite;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    height: 50%;
    width: 85%;
    
    button{
        font-size: 1.5rem; 
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 40%;

    button{
        border: none;
        background-color: transparent;
    }

    img{
        height: 50%;
    }
`