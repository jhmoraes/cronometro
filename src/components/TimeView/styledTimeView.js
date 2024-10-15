import styled from "styled-components";

export const ChronometerContainer = styled.div`    
    height: 90%;
    width: 80%;
    padding: 1rem;
    margin-top: 3rem;
    border-radius: 50%;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(111,139,157,0.2);
    
`


export const ChronometerProgressLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;

    border-radius: 50%;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
        inset -4px -4px 6px -1px rgba(111,139,157,0.1),
        -0.5px -0.5px 0px rgba(111,139,157,0.1),
        0.5px 0.5px 0px rgba(0,0,0,0.15),
        0px 12px 10px -10px rgba(0,0,0,0.05);

    p{
        color: #9E8DB1;
        font-weight: 600;
        font-size: 3rem;
    }
`

export const Time = styled.div`
    display: flex;
    flex-direction: row;

`
