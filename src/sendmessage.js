
// <!-- ------------------------inported------------------- -->

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzDgTtdkxC9Kmu3B6g9Svlc4C9d_3U_rUt-qC4ri6UjfUar59vd0bDkFJMmHUoq036IXQ/exec";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Send Successfully";
        msg.style.background = "#61b752";
        submitButton();
        setTimeout(function () {
          msg.innerHTML = "Send New Messege";
          msg.style.background = "#49025f";
        }, 2000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });





// <!-- -----------------for Email validation----------------- -->
   
      function validateEmail() {
        var emailInput = document.getElementById("email").value;
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regex.test(emailInput)) {
          return true; // Email is valid
        } else {
          alert("Please enter a valid email address.");
          return false; // Prevent form submission
        }
      }
   