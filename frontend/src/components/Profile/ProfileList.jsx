import React, { useState } from 'react'

// Redux
import { connect } from 'react-redux';

import ProfileGralInfo from './ProfileGralInfo';
import ProfilePaymentInfo from './ProfilePaymentInfo';
import ProfileChangePass from './ProfileChangePass';

import 'assets/css/Profile/ProfileList.css'

function ProfileList({ user }) {

  const [showGralInfo, setShowGralInfo] = useState(true);
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);

  const changeShowOption = (e) => {
    if (e.target.value === "account") {
      setShowGralInfo(true);
      setShowPaymentInfo(false)
      setShowChangePass(false)
    }
    else if (e.target.value === "payment") {
      setShowGralInfo(false);
      setShowPaymentInfo(true)
      setShowChangePass(false)
    }
    else {
      setShowGralInfo(false);
      setShowPaymentInfo(false)
      setShowChangePass(true)
    }
  }

  if (user.currentUser === {}) return;

  return (
    <>
      <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 profile__list__container">
        <div className="profile__list__image__container">
          <img src={require("../../assets/images/Email/girl.jpg")}
            className="profile__list__image" alt="" />
        </div>
        <div className="profile__list__container__options">
          <hr className="profile__list__separator" />
          <button className="profile__list__buttons__options" value="account" onClick={(e) => changeShowOption(e)}>Datos de Cuenta</button>
          <hr className="profile__list__separator" />
          <button className="profile__list__buttons__options" value="payment" onClick={(e) => changeShowOption(e)}>Datos de Pagos</button>
          <hr className="profile__list__separator" />
          <button className="profile__list__buttons__options" value="password" onClick={(e) => changeShowOption(e)}>Cambiar Contraseña</button>
          <hr className="profile__list__separator" />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 data__list__container">
        <h2 className="data__list__title">Vista General de la Cuenta</h2>
        {showGralInfo && <ProfileGralInfo />}
        {showPaymentInfo && <ProfilePaymentInfo />}
        {showChangePass && <ProfileChangePass />}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfileList);
