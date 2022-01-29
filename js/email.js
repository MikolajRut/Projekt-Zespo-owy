function sendMail() {
  var tempParams = {
    from_name: document.querySelector(".contact__form-input-name").value,
    to_name: document.querySelector(".contact__form-input-email").value,
    message: document.querySelector(".contact__form-textarea").value,
  };

  emailjs
    .send("service_4lsy8g6", "template_z1hjpdd", tempParams)
    .then(function (res) {
      console.log("git");
    });
}
