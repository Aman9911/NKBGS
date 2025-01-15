import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { studentName,
        motherName,
        fatherName,
        dob,
        gender,
        classAdmission,
        transport,
        address,
        pinCode,
        mobile,
        email,
        lastSchoolName,
        comments } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlTable=`
      <h3>Student Details</h3>
      <table border="1" style="border-collapse:collapse; width:50%;">
        <tbody>
          <tr>
            <td style="padding: 8px;">Student's Name</td>
            <td style="padding: 8px;">${studentName}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Mother's Name</td>            
            <td style="padding: 8px;">${motherName}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Father's Name</td>            
            <td style="padding: 8px;">${fatherName}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Date Of Birth</td>           
            <td style="padding: 8px;">${dob}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Gender</td>            
            <td style="padding: 8px;">${gender}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Class of Admission</td>
            <td style="padding: 8px;">${classAdmission}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Transport</td>           
            <td style="padding: 8px;">${transport}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Address</td>            
            <td style="padding: 8px;">${address} Pincode-${pinCode}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Mobile no.</td>
            <td style="padding: 8px;">${mobile}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">E-mail</td>           
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Previous school</td>
            <td style="padding: 8px;">${lastSchoolName}</td>
          </tr>
          <tr>
            <td style="padding: 8px;">Comments</td>            
            <td style="padding: 8px;">${comments}</td>
          </tr>
        </tbody>
      </table>
    `

    // Email to send to yourself
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Admission Enquiry",
      text: `You have a new message from ${studentName} (${email}):${mobile}\n\n${comments}`,
      html:htmlTable
    };

    // Confirmation email to send to the user
    const userConfirmationOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We Received Your Admission Enquiry!",
      text: `Hi ${studentName},\n\nThank you for reaching out! We received your enquiry and will get back to you soon.\n\nBest regards,\nNKBGS`,
    };

    try {
      // Send both emails
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(userConfirmationOptions);
      res.status(200).json({ message: "Emails sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
