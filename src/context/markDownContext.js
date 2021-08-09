import React, { useState, createContext, useContext } from "react";

const markDownContext = createContext();

export const MarkDownContextProvider = ({ children }) => {
  const [rawData, setRawData] = useState(null);

  const setData = (value) => {
    setRawData(value);
  };

  return (
    <markDownContext.Provider value={{ rawData, setData }}>
      {children}
    </markDownContext.Provider>
  );
};
const useMarkdown = () => useContext(markDownContext);
export default useMarkdown;
// export default markDownContext
