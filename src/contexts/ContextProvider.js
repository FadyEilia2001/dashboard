import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
  
  cart: false,
  chat: false,
  userProfile: false,
  notification: false,
};


export const ContextProvider = ({ children }) => {

  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setisClicked] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
 
   const handleClick = (clicked) => setisClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ activeMenu, initialState, setActiveMenu, isClicked, setisClicked, handleClick, screenSize, setScreenSize}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);