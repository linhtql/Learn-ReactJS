import { useState } from "react";

const Car = () => {
  //   const [brand, setBrand] = useState("Ford");
  //   const [model, setModel] = useState("Mustang");
  //   const [year, setYear] = useState("1964");
  //   const [color, setColor] = useState("red");

  // Or, we can just use one state and include object instead!
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  // Updating Objects and Arrays in State
  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };
  return (
    <>
      {/* <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p> */}
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
    </>
  );
};

export default Car;
