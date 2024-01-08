import {Link, useNavigate} from "react-router-dom";
import User from "../user/User";

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
      <button type="button" className="btn btn-secondary"><Link to={"/works"}>
          namu puslapis
        </Link>
        </button>
        <div className="dropdown">
          <User/>
        </div>
      </div>
    </nav>
  );
};
export default Header;
