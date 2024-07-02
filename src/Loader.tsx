import { useContext } from "react";
import { MyContext } from "./context";
import { MyContextSec } from "./contextSec";

const Loader = () => {
  console.log("rerender loader");

  const { loading, setLoading } = useContext(MyContextSec);
  return (
    <button onClick={() => setLoading(!loading)}> {String(loading)} </button>
  );
};

export default Loader;
