import { createContext, useState } from "react";

export const MyContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        loading,
        setLoading,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
