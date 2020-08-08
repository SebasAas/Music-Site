import React from 'react'
import { Link } from 'react-router-dom';

import '../../assets/css/Header/HeaderHome.css'

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
            <li className="logo" style={{ width: '20px', height: '65px', display: 'flex', alignItems: 'center' }}> <img src={require("../../assets/images/Logo/logo.png")} style={{ height: '55px', width: '55px', objectFit: 'contain' }} alt="" /> <Link to="/" style={{ fontFamily: 'ABeeZee', color: 'white', fontSize: '28px', letterSpacing: '2px' }}>QUALIFY</Link></li>
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
