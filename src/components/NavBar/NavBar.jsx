import './NavBar.scss';
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";




const NavBar = () => {
    return (
        <div className='nav-bar'>
            <Navigation />
            <MobileNavigation />
        </div>
    );
}
  

export default NavBar;