import styled from "styled-components";


export const Nav= styled.nav`
    
    width: 100vw;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const NavElements = styled.div`
    
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const Logo = styled.div`
    
    width: 78px;
    height: 30px;

`

export const NavLinks = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    
    & a{
        text-decoration: none;
        font-size: 24px;
        color: #2ba32b;
    }

`
export const Mode = styled.div`
    
    width: 90px;
    height: 32px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: 20px;
    cursor: pointer;

`
export const MobileIcon =styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: black;
    display: none;

`

export const NavMobile = styled.div`

    margin-top: 20px;
    
    @media screen and (max-width:760px){
        
        & ${NavLinks}, ${Mode}{
            display: none;
        }

        & ${MobileIcon}{
            display: flex;
    
        }

        & .mobile{
            width: 100vw;
            height: 100vh;
            
            

            & ${NavElements}{
                height: 100%;
                width: 90%;
                display: flex;
                justify-content: center;
                align-items: flex-start;
                
                

            }

            & ${Logo}{
                display: none;
            }
            & ${MobileIcon}{
                height: 100%;
                width: 100%;
                justify-content: end;
                display: flex;
                align-items: flex-start;
                padding-top: 5px;
                z-index: 10;
            }
            & ${NavLinks} {
                height: 50%;
                display: flex;
                flex-direction: column;
                z-index: 9;
                margin-left: 38%;
                margin-top: 100px;
                
            }
            & ${Mode}{
                display: flex;
                align-items: flex-end;

            }
        }
        
        
    }

`

