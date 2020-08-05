import React from 'react';
import { Link } from 'react-router-dom'

// CSS
import '../../assets/css/NotFound/NotFound.css';

function NotFound() {
  return (
    <>
      <div className="container-fluid">
        <div className="row" style={{ height: '100vh' }}>
          <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-6 notfound__image"></div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 notfound__description">
            <div className="notfound__description__container">
              <h2>
                No Hemos Encontrado la Pagina
            </h2>
              <h3>
                No te preocupes te hemos dejado unos atajos preparados para que puedas dirigirte a donde quieras
            </h3>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/">Nuevos Albunes</Link></li>
                <li><Link to="/">Politica de Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
