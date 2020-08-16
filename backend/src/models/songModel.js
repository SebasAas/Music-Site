const { Schema, model } = require('mongoose');

const SongModel = new Schema({
  title: {
    type: String,
    required: [true, 'El titulo de la musica es obligatorio']
  },
  author: {
    type: String,
    required: [true, 'El nombre del autor es obligatorio']
  },
  link: {
    type: String,
    required: [true, 'El link de la musica es obligatorio']
  },
  album: {
    type: String,
    required: [true, 'La relacion musica - album es obligatorio']
  }
}, {
  timestamp: true
});

module.exports = model('Song', SongModel);