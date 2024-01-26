import React from "react";
import Mail from '../assets/Mail.svg';
import Linkedin from '../assets/Linkedin.svg';


export default function Buttons() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:Hamzahpatel403@gmail.com';
    };
    const handleLinkedinClick = () => {
        window.open('https://www.linkedin.com/in/hamzahpatel/','_blank');
    }
    return (
        <div className="buttons">
            <button onClick={handleEmailClick} className="buttons--email">
                <img src={Mail}/><p>Email</p>
                </button>
            <button onClick={handleLinkedinClick} className="buttons--linkedin">
                <img src={Linkedin}/><p>LinkedIn</p>
                </button>
            </div>
    )
    }