import React from "react";

function EvilHeros(props) {
    return (
      <div>
        <h1>Evil Guys</h1>
        {props.evilGuys.map((hero) => {
          return (
            <>
              <p>{hero.name}</p>
              <button onClick={() => props.selectEvilGuy(hero)}>select</button>
            </>
          );
        })}
      </div>
    );
  }
export default EvilHeros;