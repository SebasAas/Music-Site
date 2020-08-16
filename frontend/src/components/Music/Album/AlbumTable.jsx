import React, { useState, useEffect } from 'react';

// Component
import AlbumList from './AlbumList'

// CSS
import 'assets/css/Music/Album/AlbumTable.css';

// Redux
import { connect } from 'react-redux';
import { getAllAlbums } from 'store/actions/albumAction';


function AlbumTable(props) {

  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    if (props.loaded) return;
    props.getAllAlbums()
  }, [])

  useEffect(() => {
    setAlbums(props.album)
  }, [props.album.loaded])

  return (
    <div className="album__table__container">
      {
        props.loaded ?
          <h2>Cargando</h2>
          :
          <AlbumList />
      }
    </div>
  )
}

const mapStateToProps = state => ({
  album: state.album
});

export default connect(mapStateToProps, { getAllAlbums })(AlbumTable)
