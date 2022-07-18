import styled from "styled-components";



export const ControlGymContainer = styled.div`
    width: 70%;
    //height: 30vh;
    //background-color: beige;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    align-items: center;

    input{
        text-align: center;
        color: #8FA7B3;
        font-size: 1.2rem;
        height: 3.5vh;
        width: 5vw;
        border-radius: 8px;
        border: 1px solid #8FA7B3;
        outline: none;
        background-color: transparent;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
    }

    label{
        color: #8FA7B3;
        
        :nth-child(1){
            grid-row: 1/span 1;
        }

        :nth-child(2){
            grid-row: 2/span 1;
        }

        :nth-child(3){
            grid-row: 3/span 1;
        }
    }

    button{
        height: 5vh;
        padding: 0;
    }
    
`