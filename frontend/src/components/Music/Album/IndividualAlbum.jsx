import React from 'react'
import { Link } from 'react-router-dom';

// CSS
import 'assets/css/Music/Album/IndividualAlbum.css';

function IndividualAlbum({ album, title }) {

  // console.log(album, title)

  return (
    <>
      <h3 className="album__list__title">{title}</h3>
      <div className="individual__album__container">
        {
          album.map(album => (
            <Link key={album._id} to={`album/${album._id}`}>
              <div className="indivual__album__container__album">
                <img src={album.image} alt="" />
                <h4 style={{ textAlign: 'center', minHeight: '55px' }}>{album.name}</h4>
                <span>{album.description.substr(0, 28)}</span>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default IndividualAlbum
