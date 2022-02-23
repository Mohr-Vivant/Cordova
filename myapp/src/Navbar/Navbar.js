import React, {useState, useEffect} from "react";
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav>  
            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">Service</li>
                <li className="items">Contact</li>
            </ul>
            <button className="btn">BTN</button>
        </nav>
    )
}