import React from 'react'
import { Link } from 'react-router-dom';

import 'assets/css/Header/HeaderHome.css'

function Header(props) {

  // $(function () {
  //   $(".toggle").on("click", function () {
  //     if ($(".item").hasClass("active")) {
  //       $(".item").removeClass("active");
  //     } else {
  //       $(".item").addClass("active");
  //     }
  //   });
  // });

  console.log(props.style)

  return (
    <>
      <nav className="header__nav" style={props.style}>
        <div className="container">
          <ul className="menu" style={{ zIndex: '4' }}>
            <li className="logo header__home__logo__container">
              <img src={require("assets/images/Logo/logo.png")} alt="" />
              <Link to="/">QUALIFY</Link>
            </li>
            <li className="item"><Link to="/">Inicio</Link></li>
            <li className="item"><Link to="/">Nosotros</Link></li>
            <li className="item"><Link to="/">Servicios</Link></li>
            <li className="item button"><Link to="/login">Ingresar</Link></li>
            <li className="item button secondary"><Link to="/register">Registrarse</Link></li>
            <li className="toggle"><span className="bars"></span></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Header
