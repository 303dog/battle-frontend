export const setHeros = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/heros")
      .then((res) => res.json())
      .then((data) => {
        const heros = data;
        dispatch({
          type: "SET_HEROS",
          payload: {
            heros,
          },
        });
      });
  };
};

export const setPoints = (hero) => {
  console.log("points added to => ", hero);
  return (dispatch) => {
    return fetch(`http://localhost:3001/api/v1/heros/${hero.id}`, {
      method: 'PATCH',
      headers: {
        Accept: 'application/json', 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( hero )
    })
    .then(response => response.json())
    .then((wins) => {
      console.log("return from post => ", wins);
        dispatch({
          type: 'SET_POINTS',
          payload: 
              wins,
            });
    })
  }

};

export const setWinner = (winner) => ({
  type: "SET_WINNER",
  payload: {
    winner,
  }
})

export const setGoodGuy = (goodGuy) => ({
  type: "SET_GOOD",
  payload: {
      goodGuy,
  } 
})   

export const setEvilGuy = (evilGuy) => ({
  type: "SET_EVIL",
  payload: {
      evilGuy,
  } 
})

