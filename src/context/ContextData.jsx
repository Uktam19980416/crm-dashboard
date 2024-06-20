import { createContext, useState } from "react";

const dataContext = createContext("")

function ContextData({ children }) {
  const [dataInfo, setDataInfno] = useState("");

  return (
    <dataContext.Provider value={{ dataInfo, setDataInfno }}>
      {children}
    </dataContext.Provider>
  );
}
export { dataContext, ContextData };
