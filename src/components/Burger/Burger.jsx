const Burger = () => {
    return ( 
        <>
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
        </> 
     );
}
 
export default Burger;