const sendEmail=()=>{
    Email.send({
    Host : "smtp.gmail.com",
    Username : "escrdc@gmail.com",
    Password : "password",
    To : "escrdc@gmail.com",
    From : "escrdc@gmail.com",
    // From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
//         Body: `
//         Name: ${document.getElementById("name").value} <br>
//         Email: ${document.getElementById("email").value} <br>
//         Phone: ${document.getElementById("phone").value} <br>
//         Message: ${document.getElementById("message").value}
//     `,
// })
    Body: "This is a test email sent from the website.",
    })
    // .then((response) => console.log("Response from SMTP server:", response))
    // .catch((error) => console.error("SMTP Error:", error));
    .then((response) => alert(`Email Sent: ${response}`))
    .catch((error) => alert(`Error: ${error.message}`));

};