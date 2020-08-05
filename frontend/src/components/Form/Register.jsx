import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// CSS
import '../../assets/css/Form/Form.css';


function Register() {

  const history = useHistory();
  const fullName = useRef();
  const email = useRef();
  const userName = useRef();
  const password = useRef();

  const signUp = async (e) => {
    e.preventDefault();

    const data = {
      fullname: fullName.current.value,
      username: userName.current.value,
      email: email.current.value,
      password: password.current.value
    }

    await axios.post('http://localhost:4000/user/add', data, { "Access-Control-Allow-Origin": "*" })
      .then((res) => {
        if (res.data.status === 201) {
          history.push({
            pathname: '/verificationID',
            email: res.data.email
          });
        }
      })
      .catch((err) => {
        console.log(err.response);
        console.log(err.request);
        console.log(err.message);
      })
  }

  return (
    <div className="container-fluid">
      <div className="form__table" style={{ marginTop: '15px' }}>
        <h1>QUALIFY</h1>
      </div>
      <hr style={{ width: '100%', color: 'black' }} />
      <form onSubmit={signUp}>
        <input ref={fullName} type="text" placeholder="Nombre Completo" />
        <input ref={email} type="email" placeholder="Email" />
        <input ref={userName} type="text" placeholder="Nombre de Usuario" />
        <input ref={password} type="password" placeholder="Clave" />
        <input type="submit" value="Enviar" />
      </form>
    </div >
  )
}

export default Register
