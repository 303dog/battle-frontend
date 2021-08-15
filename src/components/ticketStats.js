import React from "react";
import './ticketStats.css';

function TicketStats(props) {
  return (
    <div className="boxChosen">
      <div className='ticket__title'>
        <h1>The Main Event</h1>
        <div className='marquee'>
          <div className='ticketOne  evenboxinner'>
            <div className='col-1 box1'>
              {props.good.name}
        </div>
            <img src={props.good.mdImg} alt={"hero"} className='oppImg'/>
          </div>
          <div className='ticketTwo evenboxinnerE'>
            <div className='col-2 box2'>
              {props.evil.name}
          </div>
            <img src={props.evil.mdImg} alt={"evil"} className='oppImg'/>
          </div>
            <h3>VS</h3>
          </div>     
            <h2>Ring the bell for results</h2>
        </div>
    </div>  
    );
}            

export default TicketStats;