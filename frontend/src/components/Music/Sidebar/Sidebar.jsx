import React from 'react';
import { Link } from 'react-router-dom';

// Components
import ButtonSidebar from './ButtonSidebar';

// CSS
import '../../../assets/css/Music/Sidebar/Sidebar.css'

function Sidebar() {
  return (
    <>
      <div>
        <div className="logo sidebar__logo">
          <img src={require("../../../assets/images/Logo/logo.png")} alt="" />
          <Link to="/">QUALIFY</Link>
        </div>
      </div>
      <div className="sidebar__container__options">

        <ButtonSidebar
          name="Inicio"
          linkTo="/"
        />

        <ButtonSidebar
          name="Buscar"
          linkTo="/search"
        />

        <ButtonSidebar
          name="Biblioteca"
          linkTo="/collection"
        />

      </div>
      <hr className="sidebar__separator" />
    </>
  )
}

export default Sidebar
