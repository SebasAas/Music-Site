let songController = {}

const Songs = require('../models/songModel');

songController.findAllSongs = async (req, res) => {
  await Songs.find({}, (err, songs) => {
    // res.send(songs)
    console.log(songs)
  })
}

songController.findSongsByAlbum = async (req, res) => {
  // console.log(req.params.album);
  await Songs.find({ related: req.params.id }, (err, songs) => {
    console.log(songs)
  })
}

module.exports = songController;