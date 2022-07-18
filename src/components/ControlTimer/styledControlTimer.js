import styled from "styled-components"



export const ControlTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 70%;
    //background-color: aqua;

    button{
        width: 10vw;
        height: 5vh;
        margin: 0.5rem 0;
        padding: 0;
    }
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    
    input{
        text-align: center;
        color: #8FA7B3;
        font-size: 1.2rem;
        height: 5vh;
        width: 5vw;
        border-radius: 8px;
        border: 1px solid #8FA7B3;
        outline: none;
        background-color: transparent;
        margin: 0 0.5rem;
    }

`