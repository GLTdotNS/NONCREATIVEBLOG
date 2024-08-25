// context.js

import React, { createContext, useState } from "react";

// Create a context object
const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [isOpenSection, setIsOpenSection] = useState(false);

  return (
    <MyContext.Provider value={{ isOpenSection, setIsOpenSection }}>
      {children}
    </MyContext.Provider>
  );
};

// Export the context object for use in other components
export default MyContext;
