import { useContext } from "react";
import { MyContext } from "./context";

const Counter = () => {
  console.log("rerender counter");

  const { count, setCount } = useContext(MyContext);

  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default Counter;
