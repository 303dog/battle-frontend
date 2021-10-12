import { useHistory } from "react-router-dom";
import React from 'react';


function HomeButton() {
    let history = useHistory();
  
    function handleClick() {
      history.push("/");
    }
  
    return (
      <button type="button" onClick={handleClick}>
        New Battle
      </button>
    );
  }

  export default HomeButton;