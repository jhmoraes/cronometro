import styled from "styled-components";

export const TimeButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 0.4rem;
    height: 100%;
    width: 100%;

    p{
        color: #9E8DB1;
        font-weight: bold;
    }

    button{
        width: 100%;
        margin: 0;
        padding: 0;
        border-radius: 5px;
        border: 1px solid #9E8DB1;
        color: #9E8DB1;
        margin: 0.2rem 0;
        background-color: transparent;
        height: 100%;
       
        :active{
            opacity: 0.5;
        }

    }
`