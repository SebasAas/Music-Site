import React from 'react'

// Component
import IndividualAlbum from './IndividualAlbum'

// CSS
import 'assets/css/Music/Album/AlbumList.css';

// Redux
import { connect } from 'react-redux'

function AlbumList(props) {

  let Albums = []

  for (let key in props.album) {
    Albums = [...Albums, (key, props.album[key])];
  }

  return (
    <>
      {
        Albums.map(album => (
          album.albums === undefined || album.albums.length === 0 ?
            null
            :
            <IndividualAlbum key={album.title} title={album.title} album={album.albums} />
        ))
      }
    </>
  )
}

const mapStateToProps = state => ({
  album: state.album
})

export default connect(mapStateToProps)(AlbumList)
