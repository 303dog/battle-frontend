import React from "react";


function GoodHeros(props) {
  return (
    <div className="box">
      <h1>Heros</h1>
      <p>Choose your Hero!</p>
      {props.goodGuys.map((goodGuy) => {
        return (
          <>
          <div className="hero">
            <p>{goodGuy.name}</p>
            <img src={goodGuy.smImg}/>
            <button onClick={() => props.selectGoodGuy(goodGuy)}>select</button>
          </div>
          </>
        );
      })}
    </div>
  );
}

export default GoodHeros;
