import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/HeaderHome';
import axios from 'axios';

// CSS
import '../../assets/css/Email/EmailConfirmed.css';

function EmailConfirmed(props) {

  const [userID,] = useState({
    _id: props.match.params.id
  })
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    axios.post('http://localhost:4000/user/confirm', userID, { "Access-Control-Allow-Origin": "*" })
      .then((res) => {
        if (res.data.status === 200) {
          setMensaje(res.data.message)
        }
        setMensaje(res.data.message)
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        setMensaje(err.response.data.message);
        console.log(err.response);
        console.log(err.request);
        console.log(err.message);
      })
  }, [])

  return (
    <div className="container-fluid" style={{ padding: 0 }}>
      <Header />
      <div>
        <div className="emailconfirmed__container__message">
          <h2 className="emailconfirmed__message">{mensaje}</h2>
          <div style={{ display: 'flex' }}>
            <div className="emailconfirmed__btn"><Link to="/">Volver al Inicio</Link></div>
            <div className="emailconfirmed__btn"><Link to="/login">Iniciar Sesion</Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailConfirmed;
