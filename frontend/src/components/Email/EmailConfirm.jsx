import React from 'react';

// CSS
import '../../assets/css/Email/EmailConfirm.css';

function EmailConfirm(props) {

  if (props.location.email === undefined) {
    props.history.push('/notfound');
    return null;
  }

  else {
    return (
      <>
        <div className="container-fluid">
          <div className="row" style={{ height: '100vh' }}>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 emailconfirm__description">
              <div className="emailconfirm__description__container">
                <h2>Falta Poco!</h2>
                <h3>Debe verificar su cuenta, hemos enviado un email a su cuenta {props.location.email}</h3>
              </div>
            </div>
            <div className="d-none d-sm-block col-sm-6 col-md-6 col-lg-6 emailconfirm__image"></div>
          </div>
        </div>
      </>
    )
  }
}

export default EmailConfirm;
