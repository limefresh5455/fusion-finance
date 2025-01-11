import nodemailer from "nodemailer";

export default function sendEmail(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "allison@branue.com",
      pass: "cfwplqbzznrmruxc",
      // user: "marie@fusion-finance.com",
      // pass: "SK@6vaZxH4kLBYI",
    },
    secure: true,
  });

  const mailData = {
    from: "allison@branue.com",
    to: "gemma@fusion-finance.com", // info@fusion-finance.com gemma@fusion-finance.com sudarashanlinux01@gmail.com
    subject: "Email From Fusion Finance",
          html: `
       <div style="font-family: 'Arial', sans-serif; background-color: #f4f4f9; padding: 30px;">
  <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    
    <!-- Fusion logo added to header -->
    <div style="text-align: center; margin-bottom: 20px;">
      <img src="https://fusion-finance.com/fusiondeepgreen.png" alt="Fusion Finance Logo" style="max-width: 120px; height: auto;">
    </div>
    <p style="font-size: 18px; color: #555; line-height: 1.6; margin-bottom: 20px;">
      Below are the details shared with us. If any information needs to be updated, feel free to reach out.
    </p>
    <table style="width: 100%; border-collapse: collapse; font-size: 16px; color: #333;">
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Full Name</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.fullName}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Email</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.email}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.phone}</td>
      </tr>
      <tr>
        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">County</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.county}</td>
      </tr>
      <tr style="background-color: #f9f9f9;">
        <td style="padding: 10px; font-weight: bold; border-bottom: 1px solid #ddd;">Interests</td>
        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${req.body.interests}</td>
      </tr>
    </table>
    <p style="text-align: center; margin-top: 20px; font-size: 14px; color: #777;">
      Thank you for reaching out! We will get back to you as soon as possible.
    </p>
    <div style="text-align: center; margin-top: 20px;">
      <!-- Button color changed to green (#1a584f) -->
      <a href="https://fusion-finance.com" style="text-decoration: none; background-color: #1a584f; color: #fff; padding: 10px 20px; border-radius: 5px; font-weight: bold;">Visit Our Website</a>
    </div>
  </div>
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
