import React from "react";
import './superoverleague.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import github from "./github.png";
import linkedin from './linkedin.png'
export default function Portfolio()
{

    return(
        <>
     
        <div class="card mb-3">
        <div class="row no-gutters">
            <div class="col-md-4 shadow">
            <div className="col-12 bg-secondary pb-4">
            <img src="..." alt="..." className="rounded-circle"/>
            <h3 className="col-lg-12 text-center"></h3>
            <h5 className="col-lg-12 text-center">FULL STACK DEVELOPER</h5>
            {/* <img src={linkedin} className="ml-5" />
            <img src={github} className="github ml-3" /> */}
            </div>
            <div className="row p-5">
                <div className="col-lg-12 text-center bg-white">
                    <input type="button" className="btn btn-primary" value="Download CV"/>
                </div>

            </div>
            </div>
            <div class="col-md-8 p-3">
            <div class="card-body shadow">
                <h3 class="card-title">Hello my name is</h3>
                <h1 class="card-title">Shanmugam</h1>
                <p class="card-text">I'am inventive Entery-Level Full stack developer creats novel site designs and innovative user interfaces and a passionate programmer.</p>
                {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                

            </div>
            </div>
        </div>
        </div>
        </>
    );
}