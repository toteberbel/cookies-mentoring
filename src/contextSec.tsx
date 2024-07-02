import { createContext, useState } from "react";

export const MyContextSec = createContext(null);

const ContextSecProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <MyContextSec.Provider
      value={{
        count,
        setCount,
        loading,
        setLoading,
      }}
    >
      {children}
    </MyContextSec.Provider>
  );
};

export default ContextSecProvider;
