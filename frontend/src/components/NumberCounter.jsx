import React, { useEffect, useRef, useState } from "react";

function NumberCounter() {
  const inputRef = useRef(0);
  const [messageNumber, setMessageNumber] = useState();

  useEffect(() => {
    inputRef.current.value = 0;
  }, []);

  const decrement = () => {
    if (!inputRef.current.value) {
      inputRef.current.value = 0;
    }

    if (inputRef.current.value > 0) {
      inputRef.current.value = parseInt(inputRef.current.value) - 1;
    }
  };

  const increment = () => {
    if (!inputRef.current.value) {
      inputRef.current.value = 0;
    }
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
  };

  const onChangeNumber = () => {
    if (inputRef.current.value < 0) {
      inputRef.current.value = 0;
      setMessageNumber("tidak memenuhis syarat");
    } else{
      setMessageNumber("");
    }
  };

  return (
    <>
      <div className="flex flex-row h-10 w-32 rounded-lg relative bg-transparent  ">
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
          min="0"
          onChange={onChangeNumber}
        />
        <button
          data-action="increment"
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
          onClick={increment}
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </>
  );
}

export default NumberCounter;
