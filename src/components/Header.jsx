import HeaderLogo from "./Header/HeaderLogo/HeaderLogo";
import HeaderNav from "./Header/HeaderNav/HeaderNav";
import "./Header.css";
import Switch from "./Header/Switch/Switch";
import Burger from "./Burger/Burger";

const Header = () => {
    return ( 
        <header>

<div  className="container header__container">

<HeaderLogo />
<HeaderNav />
<Switch />
<Burger />
             
         
    
         
        </div>
     </header>
     );
}
 
export default Header;