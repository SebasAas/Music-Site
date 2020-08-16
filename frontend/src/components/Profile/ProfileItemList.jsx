import React from 'react'

// CSS
import 'assets/css/Profile/ProfileItemList.css'

function ProfileItemList({ state }) {

  // console.log(state)

  return (
    <>
      <div className="profile__item__list__container">
        <div className="profile__item__list__data__container">
          <h5 className="text-muted profile__item__list__data">{state.label}</h5>
        </div>
        <div className="profile__item__list__data__container">
          <h5 className="text profile__item__list__data">{state.value}</h5>
        </div>
      </div>
      <hr className="profile__item__list__separator" />
    </>
  )
}

export default ProfileItemList
