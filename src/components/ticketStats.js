import React from "react";



function TicketStats(props) {
  return (
    <div className="box">
      <h1>The Chosen</h1>
      <div className="marquee">
     <h2><p>HERO   - VS -   VILLAIN</p></h2>
    <img src={props.good.smImg} alt={"hero"}/>
            
    <img src={props.evil.smImg} alt={"evil"}/>
      <p><b><u></u></b></p>
      <div className="columns">
          <div className="col-1">
            <ul><b><p>HERO: <em>{props.good.name}</em></p></b>
            </ul>
         </div>
         <div className="col-2">
            <ul><b><p>VILLAIN: <em>{props.evil.name}</em></p></b>
            </ul>
         </div>
         
      </div>
       </div>
    </div>
  );
}            

export default TicketStats;