import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";


export default class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
      {/* <BrowserRouter> */}
        <Navbar/>
        <News pageSize={this.pageSize}/>

        {/* <Routes> */}

        
        {/* <Route path="/" element = {<News pageSize = {6} country = "in" category = "general"/>}/> */}
        
    {/* </Routes> */}

        {/* </BrowserRouter> */}
       </div>
    )
  }
}
