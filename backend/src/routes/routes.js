const { Router } = require('express');
const passport = require('passport');

const router = Router();

// Auth Routes
const {
  loginUser, checkJWT, userInfo
} = require('../controllers/authController');

// User Routes
const {
  findUser, findOneUser, addUser, confirmUser, updateUser, deleteUser,
} = require('../controllers/userController');

// Album Routes
const {
  findAlbums, findOneAlbum
} = require('../controllers/albumController');

module.exports = () => {

  // Login User
  router.post('/login', loginUser);

  // Confirm User Email
  router.post('/user/confirm', confirmUser);

  // Find Users
  router.get('/user/find', checkJWT, findUser);
  router.get('/user/find/:data', findOneUser);

  // Create User
  router.post('/user/add', addUser);

  // Update User
  router.put('/user/update/:document', updateUser);

  // Delete User
  router.delete('/user/delete/:document', deleteUser);

  // Find Album
  router.get('/album/find', findAlbums);

  // Find Album
  router.get('/album/find/:data', findOneAlbum);

  return router;
}