const { model, Schema } = require('mongoose');

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del album es obligatorio'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'La descripcion del album es obligatorio'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'La URL de la foto del album es obligatorio'],
    trim: true
  }
}, {
  timestamps: true,
});

// 1st param - name <String> model name
// 2nd param - [schema] <Schema> schema name
// 3rd param - [collection] <String> collection name (optional, induced from model name)
// 4th param - [skipInit] <Boolean> whether to skip initialization (defaults to false)

module.exports = model('Album', AlbumSchema);