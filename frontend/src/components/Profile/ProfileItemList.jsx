import React from 'react'

function ProfileItemList({ state }) {

  console.log(state)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <h5 className="text-muted" style={{ fontSize: '17px' }}>{state.label}</h5>
        </div>
        <div style={{ width: '50%' }}>
          <h5 className="text" style={{ fontSize: '17px' }}>{state.value}</h5>
        </div>
      </div>
      <hr style={{ width: '100%', color: 'grey' }} />
    </>
  )
}

export default ProfileItemList
