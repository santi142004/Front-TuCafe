import {  NavLink } from 'react-router-dom';

function Menu() {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">Lugares mas populares</h1>

      <div className="box-container">
      
        <a className="box">  {/* primer casilla del cafe */}
          
          <div className="content">
            <h3>Garden Café & Chocolate</h3>
            <br />
            <div className="image-gallery">
              <img src="image/garden1.jpg" alt="" />
            </div>
            <p>Te esperamos en el jardín de los buenos momentos.</p>
            <NavLink to="/Lugares">
            <button className="btn">Ver más</button>
            </NavLink>

            
            <span></span>
          </div>
        </a>

        <a className="box"> {/* segundo casilla del cafe */}
          
          <div className="content">
            <h3>Cafe 1760</h3>
            <br />
            <div className="image-gallery">
              <img src="/public/image/375054522_18079465150391525_7615153488089975996_n.jpg" alt="" />
            </div>
            <p>Fábrica de atardeceres. Somos el campo a 5 minutos de la ciudad. ¡Aqui solo importa el presente!.</p>
            
     <button className="btn">Ver más</button>
           

            <span></span>
          </div>
        </a>
        
        <a className="box"> {/* tercero casilla del cafe */}
          
          <div className="content">
            <h3>Del toro café</h3>
            <br />
            <div className="image-gallery">
              <img src="/public/image/2021-07-01.jpg" alt="" />
            </div>
            <p>Drink Slow Café Hecho en Colombia, El sabor de la imaginación. ☕</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>

        <a className="box"> {/* cuarto casilla del cafe */}
          
          <div className="content">
            <h3>La Cabra Loca Café Cultural</h3>
            <br />
            <div className="image-gallery">
              <img src="/public/image/cabraloca.jpg" alt="" />
            </div>
            <p>La Cabra Loca Café Cultural Lugar exclusivo para disfrutar del Buen café, comida variada, música.</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>

        <a className="box"> {/* quinto casilla del cafe */}
          
          <div className="content">
            <h3>Azahar Coffee Shop</h3>
            <br />
            <div className="image-gallery">
              <img src="/public/image/Azahar Coffee Shop.jpg" alt="" />
            </div>
            <p>Encontramos los cafes y los caficultores mas especiales de Colombia.</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>

        <a className="box"> {/* sexto casilla del cafe */}
          
          <div className="content">
            <h3>Café Sorrento</h3>
            <br />
            <div className="image-gallery">  
              <img src="/public/image/cafe sorrento.jpg" alt="" />
            </div>
            <p>Café de origen , Chocolate y Macadamia 100% Orgánico ☕🍫🌿.</p>
            <button className="btn">Ver más</button>
            <span></span>
          </div>
        </a>
          
        
       
      </div>
    </section>
  );
}

export default Menu;
