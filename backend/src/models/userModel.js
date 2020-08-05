const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  fullname: {
    type: String,
    required: [true, 'El nombre completo es obligatorio'],
    trim: true,
  },
  username: {
    type: String,
    unique: true,
    required: [true, 'El nombre de usuario es obligatorio'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'El email es obligatorio'],
    uniqueCaseInsensitive: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'La contraseña es obligatorio'],
    trim: true,
  },
  emailVerified: {
    type: Boolean,
    default: 'false',
  },
}, {
  timestamps: true,
});

UserSchema.pre('save', async function save(next) {
  // Si la contraseña es modificada salimos
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

UserSchema.methods.matchPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

module.exports = model('User', UserSchema);
