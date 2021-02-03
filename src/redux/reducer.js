

const initialState = {
    heros: [],
    goodGuy: null,
    evilGuy: null,
};

const action = {
    type: "ADD_TO_BATTLE",

};


export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_HEROS":
            return {...state, heros: action.payload.heros};
        case "SET_GOOD":
            return {...state, goodGuy: action.payload.goodGuy};
        case "SET_EVIL":
            return {...state, evilGuy: action.payload.evilGuy};
            default:
                return state;
    }
}; 