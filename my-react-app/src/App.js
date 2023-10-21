import "./App.css";
import MyForm from "./MyForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
import Todos from "./ReactMemo/Todo";
import { useState } from "react";

function App() {
  // React Memo
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    //  <MyForm/>

    // React Router

    // We wrap our content first with <BrowserRouter>
    // <BrowserRouter>
    //   {/* An application can have multiple <Routes> */}
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       {/* Does not have a path but has an index -> default route for the parent route, / */}
    //       <Route index element={<Home />} />
    //       {/* Inheritance and add to the parent route: /blogs */}
    //       <Route path="blogs" element={<Blogs />} />
    //       <Route path="contact" element={<Contact />} />
    //       {/*  Catch all for any undefined URLs -> great for a 404 error page */}
    //       <Route path="*" element={<NoPage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>

    // React Memo
    // Using memo will cause React to skip rendering a component if its props have not changed
    // ---> this can improve perfomance

    <>
      <Todos todos={todos} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>

    // When the click the increment button, the Todos component re-renders
    // if this compnent was complex, it could cause perfomance issues.

    // Solution
    // To fix this, we can use memo
    // Use memo to keep the Todos component from needlessly re-rendering
    // Wrap the Todos component export in memo
  );
}

export default App;
