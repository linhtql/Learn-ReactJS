import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            {/* The <Link/> is used to set the URK and keep track of browsing history */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

    {/* The <Outlet/> renders the current route selected */}
      <Outlet/>
    </>
  );
};

export default Layout;
