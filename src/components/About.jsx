import React from "react";
import { useNavigate } from "react-router-dom";

function About() {

    const navigate = useNavigate();

    return (
        <div>
            <h1 className="text-white">Test</h1>
            <p>Start your own adventure into a mystic and wild world.</p> 
            <p>Battle your way through 5 environments as a Warrior, Mage, Archer, Rogue, or Amazonian</p>
            <p>Take on dangerous </p>
        </div>
    );
}

export default About;