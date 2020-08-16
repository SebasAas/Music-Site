import React from 'react'

// Components
import ProfileList from './ProfileList';

// CSS
import 'assets/css/Profile/ProfileTable.css';

function ProfileTable() {

  return (
    <>
      <div className="container profile__table__container__main">
        <div className="profile__page__container">
          <div className="profile__page__image__container">
            <img className="profile__page__image" src={require("assets/images/Email/girl3.jpg")} alt="" />
          </div>
          <div className="col-12 profile__table__container__profile__list">
            <ProfileList />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileTable;