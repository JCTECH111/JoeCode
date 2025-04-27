import React from 'react'
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Skills from "./Skills";
import More from "./More";
function Index() {
    return (
        <div>
            <div id="home"><Home /></div>
            <div id="profile"><About /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
            <div id="more"><More /></div>
        </div>
    )
}

export default Index
