import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Sidebar from './Sidebar/Sidebar'
import MusicPlayer from './Player/MusicPlayer'


// CSS
import '../../assets/css/Music/MusicPage.css';

function MusicPage() {

  const [first100Music, setFirst100Music] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/album/find`, { "Access-Control-Allow-Origin": "*" })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log(err))
  })

  const showResults = () => (
    <div style={{ display: 'flex' }}>
      {first100Music.map(music => (
        <>
          <h3>Album {music.albumId}</h3>
          <p>{music.title}</p>
          <img src={music.thumbnailUrl} alt="" />
        </>
      ))}
    </div>
  )

  return (
    <>
      <div className="container-fluid music__page__container">
        <div className="col-lg-3 col-xl-2 d-none d-md-block d-lg-block d-xl-block music__page__sidebar__container">
          <Sidebar />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10 music__page__music__container">

        </div>
        <div className="col-12" style={{ position: 'fixed', bottom: '0', width: '100%', padding: '0' }}>
          <MusicPlayer />
        </div>
      </div>
    </>
  )
}

export default MusicPage
