import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css"




export default function Portfoliomenu()
{
    return(
        <>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav2">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to='/home'>Home</Link>
                </li>
                <li class="nav-item">
                <Link to='/skills'>Skills</Link>
                   
                </li>
                <li class="nav-item">
                <Link to='/certificate'>Certificate</Link>
                   
                </li>
                <li class="nav-item">
                <Link to='/contuctus'>Contuct Us</Link>
                   
                </li>
                </ul>
            </div>
            </nav>
        </>
    );
}