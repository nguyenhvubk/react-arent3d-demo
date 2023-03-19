import { Outlet, Link } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <nav>
        <ul>
          <li>
            <Link to="/">TopPage</Link>
          </li>
          <li>
            <Link to="/column">Column</Link>
          </li>
          <li>
            <Link to="/myrecord">My Record</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;