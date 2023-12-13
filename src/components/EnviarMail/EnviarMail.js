// NOTA: Intenté hacer que el mail funcionara con nodemailer pero por mucho que interara no pude conseguirlo a tiempo, mientras dejo el código igualmente de una de las pruebas que estuve haciendo

const nodemailer = require("nodemailer");

enviarMail = async () => {
  const config = {
    host: "infomoisess@gmail.com",
    port: 3006,
    auth: {
      user: "moises.solorzano11@gmail.com",
      pass: "ufrc gypb srij tibq",
    },
  };

  const mensaje = {
    from: "moises.solorzano11@gmail.com",
    to: "moises.solorzano11@gmail.com",
    subject: "Prueba",
    text: "Envio de prueba",
  };

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje);

  console.log(info);
};

enviarMail();
