import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-200">
      <h1 className="font-bold text-4xl bg-green-700 m-2 p-3 rounded-3xl text-gray-800">
        COUNTER
      </h1>
      <div className="font-bold text-7xl m-5">{count}</div>
      <div className="flex flex-row">
        <button
          className="h-16 w-16 font-bold text-4xl bg-green-700 m-2 pb-2 rounded-full text-gray-800 cursor-pointer"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
        <button
          className=" h-16 w-16 font-bold text-4xl bg-green-700 m-2 pb-1 rounded-full text-gray-800 cursor-pointer"
          onClick={() => {
            setCount(0);
          }}
        >
          0
        </button>
        <button
          className=" h-16 w-16 font-bold text-4xl bg-green-700 m-2 pb-2 rounded-full text-gray-800 cursor-pointer"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default App;
