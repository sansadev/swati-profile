import './NavBar.scss';
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import Nav from 'react-bootstrap/Nav';
import { Outlet } from "react-router-dom";





const NavBar = () => {
return (
  <>
  <Nav className="justify-content-center"
  activeKey="/home"
  onSelect={(selectedKey) => (`selected ${selectedKey}`)}
  >
      
  <Nav.Item >
       <Nav.Link to={"/"}>  Home  </Nav.Link>
  </Nav.Item>
  <Nav.Item>
       <Nav.Link to={"/BikeParts"}>  BikeParts </Nav.Link>
  </Nav.Item>
  <Nav.Item>
       <Nav.Link to={"/Blog"}>  Blog  </Nav.Link>
  </Nav.Item>
  <Nav.Item>
        <Nav.Link to={"/Sale"}> Sale </Nav.Link>
  </Nav.Item>
  </Nav>
  </>
)
}

export default NavBar;