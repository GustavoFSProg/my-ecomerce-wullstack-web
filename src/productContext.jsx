import { useState } from "react";
import { createContext, useContext } from "react";

export const productContext = createContext(false);

export function ProductContextProvider({ children }) {
  const [id, setId] = useState(false);

  return (
    <productContext.Provider value={{ id, setId }}>
      {children}
    </productContext.Provider>
  );
}
