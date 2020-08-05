const userController = {};

// Email
const sendConfirmationEmail = require('../email/sendEmail');

// Model
const User = require('../models/userModel');

// Find Users
userController.findUser = async (req, res) => {
  let searchQuery = {};
  const {
    query: {
      fullname, username, email
    }, query,
  } = req;

  if (fullname || username || email) {
    searchQuery = query;
  }
  await User.find(searchQuery, (err, usuarios) => {
    if (err) return res.send(err);
    return res.send(usuarios);
  });
};

// Find User by Document
userController.findOneUser = async (req, res) => {
  let searchByParam = {};
  const { params: { data } } = req;
  const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data);

  if (isEmail) {
    searchByParam = { email: data };
  } else {
    searchByParam = { username: data };
  }

  await User.findOne(searchByParam, (err, usuario) => {
    if (err || usuario === null) return res.send('No existe ningun usuario con ese dato');
    return res.send(usuario);
  });
};

// Crear Usuario
userController.addUser = async (req, res) => {
  const {
    fullname, username, email, password,
  } = req.body;

  if (password.length < 8) return res.status(400).send('La contraseña tiene menos de 8 caracteres.');

  User.findOne({
    $or:
      [
        { username },
        { email },
      ],
  }, (err, usuario) => {
    if (usuario !== null) {
      return res.status(400).json({ status: 400, error: 'nombre de usuario o email ya registrado' });
    }
    else {

      const newUser = new User({
        fullname, username, email, password,
      });

      console.log(newUser)

      newUser.save((err, user) => {
        if (err) {
          return res.send(403).json({ error: err });
        }
        else {
          try {
            sendConfirmationEmail(user.fullname, user.email, `${process.env.HOST_FRONT}/verificationID/${newUser._id}`)
              .then(res => {
                if (res[0].statusCode === 202) {
                  confirm(user.email);
                }
              })
              .catch(err => {
                console.log(err)
                decline();
              });

            function confirm(email) {
              return res.status(201).json({ status: 201, email: email });
            }

            function decline() {
              return res.status(400).json({ status: 400, error: "Error al enviar email" });
            }
          }
          catch {
            return res.status(400).send(`No se pudo enviar mail, favor de comunicarse con el administrador de la pagina`);
          }
        }
      });
    }
  });

};

userController.confirmUser = async (req, res) => {

  const id = req.body;

  User.findOne(id, (err, usuario) => {
    if (usuario === null || usuario === undefined) {
      return res.status(500).json({ status: 500, message: 'No existe usuario para verificar' });
    }
    else {
      User.findByIdAndUpdate(id, { emailVerified: true }, { useFindAndModify: false, new: true }, (err, usuario) => {
        if (err) {
          return error();
        }
        if (usuario.emailVerified === true) {
          return verificado();
        }
      });

      function verificado() {
        return res.status(200).json({ status: 200, message: 'La cuenta se ha validado exitosamente, empieza a escuchar la mejor musica' });
      }

      function error() {
        return res.status(500).json({ status: 500, message: 'Ha habido un error, intente nuevamente mas tarde o ponganse en contacto con el administrador del sistema' });
      }
    }
  })

  // const id = req.body

};

// Actualizar Usuario
userController.updateUser = (req, res) => {
  res.send('Usuario actualizado');
};

// Borrar Usuario
userController.deleteUser = (req, res) => {
  res.send('Usuario eliminado');
};

module.exports = userController;
