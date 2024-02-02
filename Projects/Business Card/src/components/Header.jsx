import React from "react";
import PersonalInfo from "./PersonalInfo";
import Buttons from "./Buttons";

export default function Header() {

    return (
        <div id="header-container">
            <PersonalInfo />
            <Buttons />
        </div>
    )
}