import { useState } from "react";

function FavoriteColor() {
  // initialize state at the top of function component
  const [color, setColor] = useState("");
  // The first value, color, is our current state
  // The second value. setColor, is the function that is used to upodate our state
  // Lastly, we set the initial state to an empty string: useState("")

  // Read State
  //   return <h1>My favorite color is {color}</h1>;

  // Update State
  return (
    <>
      <h1>My favorite color is {color}</h1>
      <button type="button" onClick={() => setColor("blue")}>
        Blue
      </button>
    </>
  );
}

export default FavoriteColor;
