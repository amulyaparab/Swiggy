import { LOGO } from "../utils/constants";
import {Link} from "react-router"

const Header = () => {
    return <div className="header">
        <img className="logo" src={LOGO} />
    <ul className="header-list">
        <Link className="list-item" to="/"><li>Home</li></Link>
        <Link className="list-item" to="/about"><li>About</li></Link>
        <Link className="list-item" to="/contact"><li>Contact Us</li></Link>
        <Link className="list-item" to="/cart"><li>Cart</li></Link>
    </ul>
    {/* <button>Logout</button> */}
    </div>
}

export default Header;