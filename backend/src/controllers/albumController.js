const albumController = {};

const Album = require('../models/albumModel');

albumController.findAlbums = async (req, res, next) => {
  await Album.find({}, (err, albums) => {
    console.log(albums)
  })

  res.send("Finish")
}

albumController.findOneAlbum = (req, res, next) => {
  console.log("Buscando un solo album!")
}

module.exports = albumController;