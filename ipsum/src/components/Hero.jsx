import React from 'react'
import bgimage from '../images/bgLight.jpg'
import {HeroSection,
        BgImage,
        TextContent,
        Main,
        Button } from './Hero.style'

function Hero() {
    return (
        <Main>
            <HeroSection>
           <TextContent>
                <h1>Hi! Welcome to my website!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis, dui nec tristique ornare, neque nisi fringilla lacus, blandit consectetur mauris urna vitae elit</p>
                <Button>
                    Sing-up
                </Button> 
            </TextContent>
            <BgImage>
                <img src={bgimage} alt="background-image" />
            </BgImage> 
        </HeroSection>
        </Main>
        
    )
}

export default Hero