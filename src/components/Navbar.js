import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
 

    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
     <a className="navbar-brand" href="/">SAMACHAR </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
   
    </div>
  </div>
</nav>

            </div>
        )
    }
}

export default Navbar
