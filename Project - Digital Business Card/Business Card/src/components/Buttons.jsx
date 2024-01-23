import React from "react";
import Mail from '../assets/Mail.svg';
import Linkedin from '../assets/Linkedin.svg';

export default function Buttons() {
    return (
        <div className="buttons">
            <button className="buttons--email">
                <img src={Mail}/><p>Email</p>
                </button>
            <button className="buttons--linkedin">
                <img src={Linkedin}/><p>LinkedIn</p>
                </button>
            </div>
    )
    }