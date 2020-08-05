const { Router } = require('express');
const passport = require('passport');

const router = Router();

// User Routes
const {
  findUser, findOneUser, addUser, confirmUser, updateUser, deleteUser,
} = require('../controllers/userController');

// Auth Routes
const {
  loginUser, checkJWT, userInfo
} = require('../controllers/authController');

// Test 
router.post('/test', checkJWT, userInfo)

// Find Users
router.get('/user/find', checkJWT, findUser);
router.get('/user/find/:data', findOneUser);

// Create User
router.post('/user/add', addUser);

// Confirm User
router.post('/user/confirm', confirmUser);

// Login User
router.post('/login', loginUser);

// Update User
router.put('/user/update/:document', updateUser);

// Delete User
router.delete('/user/delete/:document', deleteUser);

module.exports = router;