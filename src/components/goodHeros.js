import React from "react";
import './goodHeros.css';




function GoodHeros(props) {
  return (
    <div className="good__box">
      <div className='title__goodbar'>
      <h1>Heros</h1>
      <p>Choose your Hero!</p>
      </div>
        <div className="heros">
        <div className="row">
      {props.goodGuys.map((goodGuy) => {
        return (
          <>
          <div className="column">
            <p></p>
            <div className="card innerbox__good">
            <h3>{goodGuy.name}</h3>
            <img src={goodGuy.smImg} alt="goodguy"/>
            <button onClick={() => props.selectGoodGuy(goodGuy)} className='select'><p>SELECT</p></button>
          </div>
          </div>
          </>
        );
      })}
    </div>
    </div>
    </div>
  ); 
}
export default GoodHeros;
