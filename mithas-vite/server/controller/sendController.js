const transporter = require('../config/mailerConfig')

exports.requestEmail = async (req, res, next) =>{

    const {name, surname, email, checkIn, checkOut, items} = req.body

    try {
        await transporter.sendMail({
          from: 'Mithas Room booking<gablin004@gmail.com>', // sender address
          to: 'esse.esse.hw@gmail.com', // list of receivers
          subject: `Message from L'hotel`, // Subject line
          text: "PIPPO non è gay", // plain text body
          html: `<p>Ciao ${name} ${surname} ecco la tua reseservation dal ${checkIn} al ${checkOut}</p>
          </br>
          <p>${items}<p>` // html body
        })
        return res.status(200)
      } catch (err) {
        console.log(err)
        return res.status(500)
      }
}