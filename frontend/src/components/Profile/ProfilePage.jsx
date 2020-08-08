import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Components
import Header from '../Header/HeaderHome';
import ProfileTable from './ProfileTable';

import { connect } from 'react-redux';

// CSS
import '../../assets/css/Profile/ProfilePage.css';

function ProfilePage({ user }) {

  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    const headers = {
      "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      'x-access-token': user.currentUser.accessToken
    }

    if (user.isLoggedIn && user.currentUser !== {}) {
      axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/find/${user.currentUser.email}`, { headers })
        .then((res) => {
          setIsLoggedIn(true);
          // console.log(res);
        })
        .catch((err) => {
          setIsLoggedIn(false)
          // console.log(err.response);
        });
    } else {
      return (
        history.push('/login')
      )
    }

  }, [])

  const style = {
    backgroundColor: 'black'
  }

  const loggedContent = () => (
    <>
      <Header className="profile__page__header" style={style} />
      <div className="profile__page__background">
        <ProfileTable />
      </div>
    </>
  )

  return (

    isLoggedIn ?

      loggedContent()

      :

      <p></p>
  )

}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(ProfilePage);