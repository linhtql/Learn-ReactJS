import { useState, useEffect, useRef } from "react";

function Component4() {
  // Does not cause re-renders:
  // const [inputValue, setInputValue] = useState("");
  // const count = useRef(0);

  // useEffect(() => {
  //   count.current = count.current + 1;
  // });

  // return (
  //   <>
  //     <input
  //       type="text"
  //       value={inputValue}
  //       onChange={(e) => setInputValue(e.target.value)}
  //     />
  //     <h1>Render Count: {count.current}</h1>
  //   </>
  // );

  // Accessing DOM Elements:
  // We can add a ref attribute to an element to access it derectly in the DOM
  //   const inputElement = useRef();

  //   const focusInput = () => {
  //     inputElement.current.focus();
  //   }

  //   return (
  //     <>
  //     <input type="text" ref={inputElement} />
  //     <button onClick={focusInput}>Focus Input</button>
  //     </>
  //   )

  // Tracking State Changes
  // The useRef Hook can also cbe used to keep track of previous state values
  // THis is because we are able to persist useRef values between renders

  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
    </>
  );

  // This time we use a combination of useState, useEffect and useRef to keep track
  // of the previous state
  // In the useEffec, we are updating the useRef current value each time the
  // inputValue is updated by entering text into the input field.
}

export default Component4;
