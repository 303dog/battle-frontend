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

//export const setPoints = winner => {
//  console.log("points added to => ", winner);
//  return (dispatch) => {
//    return fetch(`http://localhost:3001/api/v1/heros/${hero.id}`, {
//      method: 'POST',
//      headers: {
//        Accept: 'application/json', 
//        'Content-Type': 'application/json'
//      },
//      body: JSON.stringify( wins )
//    })
//    .then(response => response.json())
//    .then((wins) => {
//      console.log("return from post => ", wins);
//        dispatch({
//          type: 'SET_POINTS',
//          payload: 
//              wins,
//            });
//    })
//  }
//
//};


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

