import React from "react";

// iterate and get all heros with publisher:good
function GoodHeros(props) {
  return (
    <div>
      <h1>Good Guys</h1>
      {props.goodGuys.map((hero) => {
        return (
          <>
            <p>{hero.name}</p>
            <button onClick={() => props.selectGoodGuy(hero)}>select</button>
          </>
        );
      })}
    </div>
  );
}

export default GoodHeros;
