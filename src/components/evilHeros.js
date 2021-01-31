import React from "react";
import HeroContainer from "../containers/HeroContainer";

function EvilHeros(props) {
    return (
      <div className="box">
        <h1>Villians</h1>
        <p>Choose the Opponent!</p>
        {props.evilGuys.map((evilGuy) => {
          return (
            <>
            <div className="evil">
              <p>{evilGuy.name}</p>
              <img src={evilGuy.smImg}/>
              <button onClick={() => props.selectEvilGuy(evilGuy)}>select</button>
            </div>
            </>
          );
        })}
      </div>
    );
  }
export default EvilHeros;