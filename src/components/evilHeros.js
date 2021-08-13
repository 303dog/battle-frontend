import React from "react";
import './evilHeros.css';




function EvilHeros(props) {
    return (
      <div className="evil__box">
        <div className='title__evilbar'>
        <h1>Villians</h1>
        <h3>Choose the Opponent!</h3>
        </div>
          <div className="evils">
          <div className="row">
        {props.evilGuys.map((evilGuy) => {
          return (
            <>
            <div className="column">
                <p></p>
              <div className="cardE innerbox__evil">
              <p>{evilGuy.name}</p>
              <img src={evilGuy.smImg} alt="evilguy"/>
              <button onClick={() => props.selectEvilGuy(evilGuy)} className='select'><p>SELECT</p></button>
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