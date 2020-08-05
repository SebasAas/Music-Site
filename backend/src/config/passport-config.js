const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/userModel');

// Local Strategy
passport.use(new LocalStrategy(
  (async (username, password, done) => {

    await User.findOne((username.includes('@')) ? { email: username } : { username: username }, async (err, user) => {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'No existe el usuario' });
      }

      const match = await user.matchPassword(password);
      // Match password
      if (!match) {
        return done(null, false, { message: 'Hay datos erroneos' });
      }
      return done(null, user);
    });
    // console.log("Usuario no valido");
    // return done(null, false, { message: 'Usuario no valido' });
  }),
));

// Serializacion de cookie de sesion de usuario desde y hacia la sesion
passport.serializeUser((user, done) => {
  done(null, user.id);
});
/**
 * En este ejemplo, solo la ID de usuario se serializa en la sesión,
 * manteniendo pequeña la cantidad de datos almacenados dentro de la sesión.
 * Cuando se reciben solicitudes posteriores, este ID se utiliza para buscar
 * el usuario, que se restaurará a req.user.
  */

// Deserializacion de cookie de sesion de usuario desde y hacia la sesion
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
/**
 * Buscamos el id del usuario dentro de nuestra base de datos
 * y se la asignamos al usuario que realiza la accion
 */