// Embeddable Contact Form JS File

const embeddableContactForm = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Us Form</title>
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
}

.input-group {
  margin-bottom: 20px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group input, .input-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.input-group textarea {
  height: 100px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

button[type="submit"]:hover {
  background-color: #45a049;
}
</style>
</head>
<body>

<div class="container">
  <form id="contactForm">
    <h2>Contact Us Us</h2>
    <div class="input-group">
      <label for="name">Your Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div class="input-group">
      <label for="email">Your Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div class="input-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <div class="input-group">
      <label for="file">Upload File</label>
      <input type="file" id="file" name="file">
    </div>
    <button type="submit">Send</button>
  </form>
</div>

<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function(){
    emailjs.init("-ZjUIumDm3lDjqacF"); // Replace 'your_user_id' with your EmailJS user ID
  })();
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_ei7l5oj', 'template_wjvihjl', this)
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert('Message sent successfully!');
      }, function(error) {
         console.error('FAILED...', error);
         alert('Failed to send message. Please try again later.');
      });
  });
</script>

</body>
</html>
`;

document.body.innerHTML = embeddableContactForm;
