import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "allison@branue.com",
      pass: "cfwplqbzznrmruxc",
    },
    secure: true,
  });

  const mailData = {
    from: "allison@branue.com",
    to: "gemma@fusion-finance.com", //for the testing purpose i am enter my email info@fusion-finance.com gemma@fusion-finance.com
    subject: "Email From Fusion Finance",
    html: `
      <div>
        <h2>Get In Touch</h2>
        <strong>Full Name</strong> : ${req.body.fullName} <br>
        <strong>Email</strong> : ${req.body.email} <br>
        <strong>Phone</strong> : ${req.body.phone} <br>
        <strong>County</strong> : ${req.body.county} <br>
        <strong>What are you interested in today?</strong> : ${req.body.interests}
      </div>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      // console.log(err);
    } else {
      // console.log(info);
    }
  });

  // console.log(req.body);
  res.send("success");
}
