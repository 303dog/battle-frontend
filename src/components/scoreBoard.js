import React from "react";




function RenderStats(winner)  {
  debugger;
  return (
    <div className="box">

    <div className="champion">
      <h1>Statistics</h1>
      <h2>{winner.name}</h2>
      <img src={winner.smImg} alt="scoreboard"/>
    </div>
    </div>
  )
};


export default RenderStats;
