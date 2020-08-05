import React, { useState } from 'react'

// CSS
import '../../assets/css/Form/Form.css';

// Redux
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/userAction';

function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const data = {
      username,
      password
    }

    props.signIn(data);
  }

  return (
    <div className="container-fluid">
      <div className="form__table" style={{ marginTop: '15px' }}>
        <h1>QUALIFY</h1>
      </div>
      <hr style={{ width: '100%', color: 'black' }} />
      <form onSubmit={login}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Email o Nombre de Usuario" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Clave" />
        <input type="submit" value="Enviar" />
      </form>
    </div >
  )
}

export default connect(null, { signIn })(Login);
