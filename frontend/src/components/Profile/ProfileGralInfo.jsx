import React from 'react';

// Redux
import { connect } from 'react-redux';

// Components
import ProfileItemList from './ProfileItemList';

// CSS
import 'assets/css/Profile/ProfileGralInfo.css'

function ProfileGralInfo({ user }) {
  return (
    <>
      <div>
        <h4 className="profile__gral__info__text">Perfil</h4>
        <div className="profile__gral__info__list__container">
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
        <div style={{ height: 'auto', width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '30px' }}>
          <button className="profile__gral__info__button">Editar perfil</button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileGralInfo);
