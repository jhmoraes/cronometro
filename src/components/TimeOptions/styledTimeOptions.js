import styled from "styled-components";

export const OptionTimesContainer = styled.div`
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5%;
    width: 50%;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(255,255,255);

    img{
        height: 70%;
        :hover{
            height: 85%;
        }
        :active{
            opacity: 0.5;
        }
    }

`


