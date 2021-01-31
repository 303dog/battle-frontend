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

export const setGood = (props) => {
    return (dispatch) => {
        props.selectGoodGuy = (goodGuy) => {
            dispatch({
                type: "SET_GOOD",
                payload: {
                    goodGuy,
                }   
        })    
    }
}}

export const setEvil = (props) => {
    return (dispatch) => {
        props.selectEvilGuy = (evilGuy) => {
            dispatch({
                type: "SET_EVIL",
                payload: {
                    evilGuy,
                }   
        })    
    }
}}