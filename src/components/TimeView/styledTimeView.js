import styled from "styled-components";

export const ChronometerContainer = styled.div`
    //background-color: #fff;
    
    height: 30vh;
    width: 15vw;
    padding: 1rem;
    margin-top: 3rem;
    border-radius: 50%;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(111,139,157,0.7);
`


// https://www.youtube.com/watch?v=mSfsGTIQlxg
export const ChronometerProgressLine = styled.div`
    //background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 30vh;
    width: 15vw;
    border-radius: 50%;
    //border: 1px solid #E91E63;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
        inset -4px -4px 6px -1px rgba(111,139,157,0.7),
        -0.5px -0.5px 0px rgba(111,139,157,1),
        0.5px 0.5px 0px rgba(0,0,0,0.15),
        0px 12px 10px -10px rgba(0,0,0,0.05);


    p{
        color: #8FA7B3;
        font-weight: 600;
        font-size: 3rem;
    }
`
