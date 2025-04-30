import React from 'react'
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import More from "./More";
import PortfolioMarquee from '../components/PortfolioMarquee';

import Footer from '../components/Footer';
function Index() {
    return (
        <div className='w-full flex justify-center  '>
            <div className='w-full md:w-[60%] md:border-1 border-gray-200 pt-[5rem] md:pt-[12rem] px-4'>
                <div id="home"><Home /></div>
                <div id="profile"><About /></div>
                <div id="skills"><Skills /></div>
                <div id="projects"><Projects /></div>
                <div id="contact"><Contact /></div>
                {/* <div id="more"><More /></div> */}
                <Footer />
            </div>
            <PortfolioMarquee />
        </div>
    )
}

export default Index
