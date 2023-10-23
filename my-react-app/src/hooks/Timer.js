import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // When the count changes, a render happens
  // This is not what we want
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // });

  // Fix
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []); // <- Add empty brackets here

  // useEffect(() => {
  //   setCalculation(() => count * 2);
  // }, [count]) // <- Add the count variable here

  // Effect Cleanup
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <h1>I've rendered {count} times!</h1>; */}
      {/* <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p> */}
      <h1>I've rendered {count} times!</h1>
    </>
  );
}

export default Timer;
