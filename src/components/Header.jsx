import HeaderLogo from "./Header/HeaderLogo/HeaderLogo";
import HeaderNav from "./Header/HeaderNav/HeaderNav";
import "./Header.css";
import Switch from "./Header/Switch/Switch";

const Header = () => {
    return ( 
        <header>

<div  className="container header__container">

<HeaderLogo />
<HeaderNav />
<Switch />

             
          {/* <!-- Бургер-иконка --> */}
          <div  className="burger-container">
            <div  className="burger-menu">
              <div  className="burger-line"></div>
              <div  className="burger-line"></div>
              <div  className="burger-line"></div>
            </div>
          </div>
    
          {/* <!-- Затемнение фона --> */}
          <div  className="overlay"></div>
    
         
        </div>
     </header>
     );
}
 
export default Header;