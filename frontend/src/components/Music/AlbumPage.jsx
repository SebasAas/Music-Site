import React from 'react';

// Components
import Skeleton from './Skeleton/Skeleton'
import Albums from './Album/AlbumTable'

// CSS
import 'assets/css/Music/MusicPage.css';

function AlbumPage() {

  return (
    <>
      <Skeleton>
        <Albums />
      </Skeleton>
    </>
  )
}

export default AlbumPage
