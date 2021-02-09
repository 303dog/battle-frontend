

const initialState = {
    heros: [],
    goodGuy: null,
    evilGuy: null,
    winner: null,

};




export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_HEROS":
            return {...state, heros: action.payload.heros};
        case "SET_GOOD":
            return {...state, goodGuy: action.payload.goodGuy};
        case "SET_EVIL":
            return {...state, evilGuy: action.payload.evilGuy};
        case "ADD_POINTS":
            return {...state, winner: action.payload.winner};
            default:
                return state;
    }
}; 