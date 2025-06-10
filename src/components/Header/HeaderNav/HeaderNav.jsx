import './HeaderNav.css'

const HeaderNav = () => {
    return ( 
     <nav  className="nav">
            <ul  className="nav__list">
              <li  className="nav__item"><a  className="nav__link link-reset" href="#about">Обо мне</a></li>
              <li  className="nav__item"><a  className="nav__link link-reset" href="#projects">Проекты</a></li>
              <li  className="nav__item"><a  className="nav__link link-reset" href="#contact">Контакты</a></li>
            </ul>
          </nav> 
     );
}
 
export default HeaderNav;

