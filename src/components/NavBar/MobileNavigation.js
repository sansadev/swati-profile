
    import NavLinks from './NavLinks';
    import {CgMenuRound} from 'react-icons/cg';



    const MobileNavigation = () => {
        return ( 
        <nav className='MobileNavigation navbar navbar-expand-sm bg-dark'>
                <CgMenuRound  className="hamburger" />
                <NavLinks />
        </nav>
        );
    }

    export default MobileNavigation;