import styled from "styled-components";


export const ControlGymContainer = styled.div`
    width: 60%;
    height: 30%;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10%;
    //grid-row-gap: 2%;
    align-items: center;
    //background-color: pink;

    input{
        text-align: center;
        color: #9E8DB1;
        font-size: 1.2rem;
        height: 5vh;
        width: 80%;
        border-radius: 8px;
        border: 1px solid #9E8DB1;
        outline: none;
        background-color: transparent;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        font-size: 1.5rem;
    }

    label{
        display: flex;
        flex-direction: column;
        color: #9E8DB1;
        font-size: 1.1rem;
        
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
        border: 1px solid;
        font-size: 1.1rem;
    }
    
`