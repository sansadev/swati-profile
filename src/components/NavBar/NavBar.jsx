import './NavBar.scss';
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from "react-router-dom";





const NavBar = () => {
    return (
        <>
        <Nav className="justify-content-center"
        activeKey="/home"
        onSelect={(selectedKey) => (`selected ${selectedKey}`)}
        >
            
        <Nav.Item>
              <Nav.Link><Link to={"/"}>  Home  </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to={"/BikeParts"}>  BikeParts </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link><Link to={"/Blog"}>  Blog  </Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
              <Link to={"/Sale"}>  Sale  </Link>
              </Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )
}

export default NavBar;