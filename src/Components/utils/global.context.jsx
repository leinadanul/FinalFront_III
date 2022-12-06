import { createContext, useEffect, useMemo, useReducer } from "react";
import { actions, initialState, reducer } from "./reducer.service";



export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const providerState = useMemo(()=> ({
    data: state.data,
    tema: state.tema,
    setData: (item) =>{
      dispatch({type: actions.setData, payload: item})
    },
    setDarktema: ()=>{
      dispatch({type: actions.setTemaDark})
    },
    setLighttema: ()=>{
      dispatch({type: actions.temaLight})
    }
  }), [state, dispatch])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => providerState.setData(data) );
  }, [providerState]);

  return (
    <ContextGlobal.Provider value={providerState}>
      {children}
    </ContextGlobal.Provider>
  );
};

//LISTO

