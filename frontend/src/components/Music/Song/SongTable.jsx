import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AlbumLoader from 'components/Loader/AlbumLoader'

// Redux
import { connect } from 'react-redux';

import { getSongByAlbum } from 'store/actions/songAction';

function SongTable(props) {

  const { related } = useParams();

  useEffect(() => {
    props.getSongByAlbum(props.id)
  }, [])


  if (props.album._id !== related) return (
    AlbumLoader()
  )

  const { song, album } = props

  return (
    <div style={{ paddingTop: '10px' }}>
      <div style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.5), transparent)', padding: '30px', borderRadius: '5px', marginBottom: '20px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ height: '200px', width: '200px' }}>
            <img style={{ height: '100%', width: 'auto', objectFit: 'contain' }} src={album.image} alt="" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '20px', color: '#f1f1f1' }}>
              <h1 style={{ fontFamily: 'Arial', fontWeight: '600', fontSize: '5.5vw' }}>{album.name}</h1>
              <h4 style={{ fontFamily: 'Roboto', fontSize: '2vw' }}>{album.description}</h4>
            </div>
          </div>
        </div>
      </div>
      {song.length === 0 ?
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ fontFamily: 'Roboto', color: 'whitesmoke' }}>Sin Canciones</h2>
        </div>

        :

        song.map(song => (
          <div key={song._id}>
            <div style={{ width: '100%', height: 'auto' }}>
              <Link to={`#${song.id}`}>
                <button style={{
                  width: '100%', backgroundColor: 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between',
                  height: '55px', alignItems: 'center', color: '#f5f5f5'
                }}>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '10px' }}>
                      <svg width="1.6em" height="1.6em" viewBox="0 0 16 16" className="bi bi-file-music" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z" />
                        <path d="M9 11.5c0 .828-.895 1.5-2 1.5s-2-.672-2-1.5.895-1.5 2-1.5 2 .672 2 1.5z" />
                        <path fillRule="evenodd" d="M9 5v6.5H8V5h1z" />
                        <path d="M8 4.754a1 1 0 0 1 .725-.961l1.5-.429a1 1 0 0 1 1.275.962V6L8 7V4.754z" />
                      </svg>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '20px' }}>
                      <span>
                        {song.title}
                      </span>
                      <span>
                        {song.author}
                      </span>
                    </div>
                  </div>
                  <div style={{ paddingRight: '20px' }}>
                    <span>
                      0:00
                    </span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        ))
      }



    </div>
  )
}

const mapStateToProps = state => ({
  song: state.song.songs,
  album: state.song.albumRelatedSongs
})

export default connect(mapStateToProps, { getSongByAlbum })(SongTable);