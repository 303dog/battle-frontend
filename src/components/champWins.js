import React from "react";
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';


function Score(props) {
    
    return (
        <Router>
          <Link to="/">
            Champions total
            {props.winner.name}
          </Link>
          
          
    
        </Router>
    );
  }
export default Score;