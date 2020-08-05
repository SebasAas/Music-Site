import React from 'react'

// Components
import ProfileList from './ProfileList';

function ProfileTable() {

  return (
    <>
      <div className="container">
        <div className="profile__page__container">
          <div className="profile__page__image__container">
            <img className="profile__page__image" src={require("../../assets/images/Email/girl.jpg")} alt="" />
          </div>
          <div className="col-12" style={{ display: 'flex', padding: '0' }}>
            <ProfileList />
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileTable;