import React, { useRef } from "react";

function NumberCounter() {
  const inputRef = useRef(0);
  const inputNumber =  inputRef.current.valueOf = 0
  const decrement = () => {
    if (inputRef.current.valueOf > 0) {
      
      inputRef.current.valueOf = parseInt(inputRef.current.valueOf) - 1;
    }
  };

  const increment = () => {
    inputRef.current.valueOf = parseInt(inputRef.current.valueOf) + 1;
  };

  return (
    <div className="custom-number-input h-10 w-32">
      <label
        htmlFor="custom-input-number"
        className="w-full text-gray-700 text-sm font-semibold"
      >
        Masukan jumlah
      </label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          data-action="decrement"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
          onClick={decrement}
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          ref={inputRef}
          className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-base cursor-default flex items-center text-gray-700 outline-none"
          name="custom-input-number"
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}

export default NumberCounter;
