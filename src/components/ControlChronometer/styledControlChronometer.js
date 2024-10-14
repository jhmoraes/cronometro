import styled from "styled-components";


export const ControlContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    height: 20%; 

    button {
        border-radius: 50%;

        
        img{
            height: 4vh;
        }

        box-shadow: 5px 6px 7px 1px rgba(0,0,0,0.15);

        :nth-child(2){
            margin-bottom: 2rem;
            img{
                height: 7vh;
            }
        }
        
    }

`