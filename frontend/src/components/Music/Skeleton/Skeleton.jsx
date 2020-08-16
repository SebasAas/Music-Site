import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MenuResponsive from '../MenuResponsive/MenuResponsive'
import MusicPlayer from '../Player/MusicPlayer';

function Skeleton(props) {

  return (
    <div className="container-fluid music__page__container">
      <div className="col-lg-3 col-xl-2 d-none d-md-block d-lg-block d-xl-block music__page__sidebar__container">
        <Sidebar />
      </div>
      <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 music__page__music__container"
        style={{ paddingBottom: '110px' }}>
        {props.children}
      </div>
      <div className="col-12" style={{ position: 'fixed', bottom: '0', width: '100%', padding: '0' }}>
        <MusicPlayer />
        <MenuResponsive />
      </div>
    </div>
  )
}

export default Skeleton
