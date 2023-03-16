import styled from "styled-components";

export const HeroSection = styled.div`

    
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100vw;
    height: 80vh;
    margin-top: 40px;
    

`

export const TextContent = styled.div`
    width: 45%;
    height: 100%;
    color: black ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    & p{
        font-size: 24px;
    }
`
export const BgImage = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    & img{
        width: 100%;
        height: auto;
        max-width: 567px;
    }


`

export const Button = styled.button`
    background-color: #2ba32b;
    color: white;
    border-radius: 50px;
    border: 0;
    width: 188px;
    height: 51px;
    font-size: 24px;

`

export const Main = styled.div`
    @media screen and (max-width:760px){

        & ${HeroSection}{
            height: 150vh;
            flex-direction: column-reverse;
            
            
        }

        & ${TextContent}{
            width: 80%;
        }
        & ${BgImage}{
            width: 70%;
        }
    }

`