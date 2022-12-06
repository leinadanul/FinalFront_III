export const initialState = { tema: "light", data: [] };

export const actions = {
    temaLight: "setLight",
    setTemaDark: "setDarkK",
    setData: "setData"
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actions.setData:{
            return ({...state, data: action.payload})}
        case actions.setTemaDark:
            return ({...state, tema: "dark"})
        case actions.temaLight:
            return  ({...state, tema: "light"})
        default: {
            return state}
    }
}

//Listo