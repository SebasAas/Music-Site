const albumController = {};

const Album = require('../models/albumModel');
const Song = require('../models/songModel')

albumController.findAlbums = async (req, res, next) => {
  await Album.find({}, (err, albums) => {
    if (err) return;
    res.send(albums)
    // console.log(albums)
  })
}

// albumController.findOneAlbum = (req, res, next) => {
//   console.log("Buscando un solo album!")
// }

albumController.findSongsByAlbum = async (req, res, next) => {
  let arrSongs = [];
  await Album.findById(req.params.id, (err, songs) => {
    if (err) {
      res.status(500).json({ error: 'Hubo un error al encontrar el album' });
      return;
    }

    console.log(songs)

    const { name, description, image, _id } = songs;

    if (songs.songs.length === 0) {
      res.status(200).json({ album: { name, description, image, _id }, songs: [] })
      return;
    } else {
      songs.songs.map((id) => {
        Song.findById(id, (err, song) => {

          if (err) {
            res.status(500).json({ error: 'Hubo un error al encontrar las canciones' });
            return;
          }

          arrSongs = [...arrSongs, song]
          if (arrSongs.length === songs.songs.length) {
            res.status(200).json({ album: { name, description, image, _id }, songs: arrSongs })
            return;
          }
        })
      })
    }
  })
}

module.exports = albumController;