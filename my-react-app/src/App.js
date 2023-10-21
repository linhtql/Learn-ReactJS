import "./App.css";
import MyForm from "./MyForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";

function App() {
  return (
    //  <MyForm/>

    // We wrap our content first with <BrowserRouter>
    <BrowserRouter>
      {/* An application can have multiple <Routes> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Does not have a path but has an index -> default route for the parent route, / */}
          <Route index element={<Home />} />
          {/* Inheritance and add to the parent route: /blogs */}
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          {/*  Catch all for any undefined URLs -> great for a 404 error page */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
