require('dotenv').config();

const sendConfirmationEmail = async (name, email, link) => {
  if (name, email, link) {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API);

    const msg = {
      to: email,
      from: 'sebastiansoplan@outlook.com',
      templateId: 'd-be317dee0ca44686b4a4f5beb8864fce',
      dynamic_template_data: {
        name: name,
        activation_link: link,
      }
    }

    return (await sgMail.send(msg)
      .then(res => {
        return (res)
      }).catch(err => {
        return (err)
      }));
  }
  else {
    return;
  }

}

module.exports = sendConfirmationEmail;