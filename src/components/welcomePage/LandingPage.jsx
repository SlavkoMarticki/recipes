import React from "react";
import "./landingPage.css";
import {useNavigate} from "react-router-dom";

export default function LandingPage(){
    const navigate = useNavigate();
    return ( 
        <div className="welcomeBlock">
            <h1>Welcome to Recipe App!</h1>
            <button onClick={() => {navigate("/home")}} >Start</button>
        </div>
    )
}