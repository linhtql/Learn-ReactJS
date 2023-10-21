import { useState } from "react";

function MyForm() {
  // Handling Forms
  const [name, setName] = useState("");

  // Multiple Input Fields
  const [inputs, setInputs] = useState({});

  // Textarea
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  // Select
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    // Multiple Input Fields
    // const name = event.target.name;
    // const value = event.target.value;
    // setInputs((values) => ({ ...values, [name]: value }));

    // Textarea
    // setTextarea(event.target.value);

    // Select
    setMyCar(event.target.value);
  };

  // Submitting Forms
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`The name you entered was: ${name}`)
    alert(inputs);
  };

  return (
    // Handling Forms
    // <form onSubmit={handleSubmit}>
    //     <label>
    //         Enter your name:
    //         <input
    //         type='text'
    //         value={name}
    //         onChange={(e) => setName(e.target.value)}
    //         />
    //     </label>
    // </form>

    // Multiple Input Fields
    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Enter your name:
    //     <input
    //       type="text"
    //       name="username"
    //       value={inputs.username || ""}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <label>
    //     Enter your age:
    //     <input
    //       type="number"
    //       name="age"
    //       value={inputs.age || ""}
    //       onChange={handleChange}
    //     />
    //   </label>
    //   <input type="submit" />
    // </form>

    // Textarea
    // <form>
    //     <textarea value={textarea} onChange={handleChange}></textarea>
    // </form>

    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

export default MyForm;
