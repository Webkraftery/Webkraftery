const { contactUsEmail } = require("../mail/templates/contactFormRes");
const mailSender = require("../utils/mailSender");

exports.contactUsmail = async (req, res) => {
  // Destructure the data from the frontend form.
  // The frontend sends 'fullName' and 'service'.
  const { fullName, email, message, phoneNo, service } = req.body; 

  console.log("Received form data:", req.body); // Log the received data for debugging

  // Input validation (optional but recommended for robustness)
  if (!fullName || !email || !message || !phoneNo || !service) {
    return res.status(400).json({
      success: false,
      message: "All fields are required. Please fill out the form completely.",
    });
  }

  try {
    // Send a confirmation email to the user.
    // This provides a record for the user and confirms the submission.
    const userEmailResponse = await mailSender(
      email, // The recipient is the user's email
      "Thank you for contacting WebKraftery!", // Subject for the user's email
      contactUsEmail(fullName, email, message, phoneNo, service) // Pass the correct data to your email template
    );

    console.log("Email sent to user:", userEmailResponse);

    // Send a success response back to the frontend.
    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully! We will get back to you shortly.",
    });

  } catch (error) {
    // Handle any errors that occur during the process.
    console.error("Error sending email:", error);
    // Log the detailed error message
    console.error("Error message:", error.message); 
    
    return res.status(500).json({
      success: false,
      message: "An error occurred while sending the message. Please try again later.",
      error: error.message,
    });
  }
};