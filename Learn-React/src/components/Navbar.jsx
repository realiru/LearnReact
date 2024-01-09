import React from "react";
import Logo from '../assets/react.svg';
export default function Navbar() {
return (
<nav className="navbar"> 
<div className="navbar-right">
<img className="navbar-logo" src={Logo} alt="Logo"/>
<h1 className="navbar-text">ReactFacts</h1>
</div>
<div className="navbar-left">
<p className="navbar-subtext"> React Course - Project 1</p>
</div>
</nav>
)
}