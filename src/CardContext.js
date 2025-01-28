import { createContext, useState } from "react";
const CardContext =createContext();
const CardProvider = ({ children }) => {
  const [selectedCard,SetSelectedCard]=useState([]);
  const [Count, SetCount]=useState(0);
    return (
      <CardContext.Provider value={{selectedCard,SetSelectedCard,Count,SetCount}}>
        {children}
      </CardContext.Provider>
    );
  };
export {CardContext,CardProvider};