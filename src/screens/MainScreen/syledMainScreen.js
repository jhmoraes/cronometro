import styled from "styled-components";

// #0E0B16
// #263238
// #A239CA
// #E91E63
// #4717F6
// #E7DFDD


export const MainScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #C5B3D3;

`

export const MainScreenLayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 38px;
    background-color: #F5F5F5;
    height: calc(50vh * 16 / 10);
    width: calc(30vh * 16 / 10);
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(0,0,0,0.15);

   @media screen and (max-width: 768px){
        border-radius: 0px;
        height: 100vh;
        width: 100vw;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px){
        height: 80vh;
        width: 50vw; 
    } 
`

export const ContainerCronometer = styled.div`
    height: calc(25% * 16 / 10);
    width: calc(50% * 16 / 10);
    margin-bottom: 3rem;

    display: flex;
    justify-content: center;
    align-items: center;
   
    margin-top: 3rem;

    @media screen and (min-width: 569px) and (max-width: 768px){
        height: calc(35% * 4 / 3);
        width: calc(50% *  4 / 3);
      
    }
`

