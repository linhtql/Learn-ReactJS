import { useState, createContext, useContext } from "react";

// Step 1: create context
const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Tran Quang Linh");

  return (
    // Step 2: use the COntext Provider to wrap the tree of components
    //that need the state Context
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Component2 />
    </UserContext.Provider>
  );

  // Now, all components in this tree will have access to the user Context
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}
function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}
function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}
// Step 3: use the useContext Hook
function Component5() {
  // Access the user Context in all components:
  const user = useContext(UserContext);
  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

export default Component1;
