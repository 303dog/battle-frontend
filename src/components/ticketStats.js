import React from "react";


function TicketStats(props) {
  return (
    <div className="boxChosen">

      <h1>Main Event</h1>
      <div className="marquee">
     <h2><p>HERO   - VS -   VILLAIN</p></h2>
     <div className="float1">
    <img src={props.good.smImg} alt={"hero"}/>
    </div>
    <div className="float2">
    <img src={props.evil.smImg} alt={"evil"}/>
    </div>
      <p><b><u></u></b></p>
      <div className="columns">
          <div className="col-1">
            <ul><b><p>(H): <em>{props.good.name}</em></p></b>
            </ul>
         </div>
         <div className="col-2">
            <ul><b><p>(V): <em>{props.evil.name}</em></p></b>
            <p>Ring the bell for results</p>
            </ul>
         </div>
         
      </div>
       </div>
    </div>
  );
}            

export default TicketStats;