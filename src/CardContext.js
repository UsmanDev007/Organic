import { createContext, useState } from "react";
const CardContext =createContext();
const CardProvider = ({ children }) => {
  const [selectedCard,SetSelectedCard]=useState([]);
    return (
      <CardContext.Provider value={{selectedCard,SetSelectedCard}}>
        {children}
      </CardContext.Provider>
    );
  };
export {CardContext,CardProvider};