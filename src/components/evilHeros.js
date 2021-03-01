import React from "react";




function EvilHeros(props) {
    return (
      <div className="box">
        <h1>Villians</h1>
        <p>Choose the Opponent!</p>
          <div className="heros">
          <div calssName="row">
        {props.evilGuys.map((evilGuy) => {
          return (
            <>
            <div className="column">
                <p></p>
              <div className="cardE">
              <p>{evilGuy.name}</p>
              <img src={evilGuy.smImg} alt="evilguy"/>
              <button onClick={() => props.selectEvilGuy(evilGuy)}><p>SELECT</p>Record wins: <b>{evilGuy.wins}</b></button>
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
export default EvilHeros;