import styled from "styled-components";

export const OptionTimesContainer = styled.div`
    //background-color: #fff;
    height: 3vh;
    width: 15vw;
    padding: 1rem 3rem;
    margin-bottom: 3rem;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
                -6px -6px 10px -1px rgba(111,139,157,0.7);

    img{
        height: 3vh;
        :hover{
            height: 4vh;
        }
        :active{
            opacity: 0.5;
        }
    }
`



    // box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    //     inset -4px -4px 6px -1px rgba(111,139,157,0.7),
    //     -0.5px -0.5px 0px rgba(111,139,157,1),
    //     0.5px 0.5px 0px rgba(0,0,0,0.15),
    //     0px 12px 10px -10px rgba(0,0,0,0.05);



