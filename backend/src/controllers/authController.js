const passport = require('passport');
const jwt = require('jsonwebtoken');

const authController = {}

// Logear usuario
authController.loginUser = function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {

    const { emailVerified, fullname, username, email, _id } = user

    if (user && emailVerified) {
      const accessToken = generateAccessToken(user._id)
      console.log(accessToken)
      res.status(200).json({
        code: 200,
        message: "Se ha validado el usuario",
        user: {
          id: _id,
          fullname,
          username,
          email,
          emailVerified,
          accessToken
        },
      })
      return;
    }
    else if (!emailVerified) {
      res.status(500).json({ code: 500, message: "Debe validar su correo electronico" })
      return;
    }
    else if (info.message === "No existe el usuario") {
      res.status(500).json({ code: 500, message: "No existe un usuario registrado con esos datos" })
      return;
    }
    else if (info.message === "Hay datos erroneos") {
      res.status(500).json({ code: 500, message: "Hay datos erroneos en el formulario" })
      return;
    }
    else {
      res.status(500).json({ code: 500, message: "Hubo un error, intente mas tarde" })
      return;
    }

  })(req, res, next);
};

function generateAccessToken(id) {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN, {
    expiresIn: '25m'
  });
}

authController.checkJWT = function (req, res, next) {

  const token = req.header('x-access-token')

  if (!token) {
    res.status(500).json({ status: 500, message: 'No estas autorizado a ingresar' });
    return;
  } else {
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {

      if (err) {
        if (err.name === 'TokenExpiredError') {
          res.status(501).json({ status: 501, message: 'Tiempo de inactividad' })
          return;
        } else if (err.name === 'JsonWebTokenError') {
          res.status(501).json({ status: 501, message: 'Firma invalida' })
          return;
        }
        else {
          console.log(err);
          return;
        }
      }
      else {
        // req.query = {

        // }
        return next();
      }
    });
  }
}

authController.userInfo = function (req, res, next) {
  console.log(req.body)
}

module.exports = authController;