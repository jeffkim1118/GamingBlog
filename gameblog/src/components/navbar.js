import React from "react";
import '../styles/navbar.css';

export default class navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Tarkov Blog</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav float-right">
                            <li className="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        )
    }
}