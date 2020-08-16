import {
  FETCH_ALL_ALBUMS,
} from '../actions/actionTypes';

const initialState = {
  newAlbum: {},
  mostListening: {},
  reggaetonAlbum: {},
  urbanAlbum: {},
  eightieAlbum: {},
  otherAlbum: {},
  loaded: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_ALBUMS:

      let newAlbum = [];
      let mostListening = [];
      let reggaetonAlbum = [];
      let urbanAlbum = [];
      let eightieAlbum = [];
      let otherAlbum = [];

      action.payload.map(song => {
        if (song.related === "new") {
          newAlbum = [...newAlbum, song]
        } else if (song.related === "most") {
          mostListening = [...mostListening, song]
        } else if (song.related === "reggaeton") {
          reggaetonAlbum = [...reggaetonAlbum, song]
        } else if (song.related === "urban") {
          urbanAlbum = [...urbanAlbum, song]
        } else if (song.related === "eightie") {
          eightieAlbum = [...eightieAlbum, song]
        } else {
          otherAlbum = [...otherAlbum, song]
        }
      });

      return {
        ...state,
        newAlbum: {
          title: 'Nuevos Lanzamientos',
          related: 'new',
          albums: newAlbum
        },
        mostListening: {
          title: 'Mas Escuchadas',
          related: 'most',
          albums: mostListening
        },
        reggaetonAlbum: {
          title: 'Reggaeton Mix',
          related: 'reggaeton',
          albums: reggaetonAlbum
        },
        urbanAlbum: {
          title: 'Musica Urbana',
          related: 'urban',
          albums: urbanAlbum
        },
        eightieAlbum: {
          title: 'Musica de los 80',
          related: 'eightie',
          albums: eightieAlbum
        },
        otherAlbum: {
          title: 'Otros Albunes',
          related: '',
          albums: otherAlbum
        },
        loaded: true
      }

    default:
      return state
  }
}