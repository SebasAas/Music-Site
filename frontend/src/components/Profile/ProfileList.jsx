import React from 'react'

// Redux
import { connect } from 'react-redux';

// Components
import ProfileItemList from './ProfileItemList';

function ProfileList({ user }) {

  if (user.currentUser === {}) return;

  return (
    <>
      <div className="col-3" style={{ height: '800px', backgroundColor: '#1B1B1B' }}>
      </div>
      <div className="col-9" style={{ height: '800px', backgroundColor: 'whitesmoke', display: 'flex', flexDirection: "column", padding: '40px' }}>
        <h2 style={{ textAlign: 'center', marginTop: '40px', fontFamily: 'Arial' }}>Vista General de la Cuenta</h2>
        <h4 style={{ fontFamily: 'Arial', marginTop: '30px' }}>Perfil</h4>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>

          <ProfileItemList
            state={{
              label: 'Nombre Completo',
              value: user.currentUser.fullname
            }}
          />

          <ProfileItemList
            state={{
              label: 'Email',
              value: user.currentUser.email
            }}
          />

          <ProfileItemList
            state={{
              label: 'Nombre de Usuario',
              value: user.currentUser.username
            }}
          />

          <ProfileItemList
            state={{
              label: 'Pais',
              value: "Argentina"
            }}
          />
        </div>
        <button style={{ padding: '10px', border: '1px solid whitesmoke', borderRadius: '10px' }}>Editar perfil</button>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileList);
