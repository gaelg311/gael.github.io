document.addEventListener("DOMContentLoaded", () => {
  //define some constants for the buttons, close functionality, and the form itself
  const contactButton = document.getElementById("contact-button");
  const contactModal = document.getElementById("contact-modal");
  const closeModal = document.getElementById("close-modal");
  const contactForm = document.getElementById("contact-form");
  const clearButton = document.getElementById("clear-button");

  //show modal when contact button is clicked
  contactButton.addEventListener("click", () => {
    contactModal.style.display = "block";
  });

  //close form when the 'x' is clicked
  closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  //close form when space outside modal is clicked
  window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
      contactModal.style.display = "none";
    }
  });

  //form submission, output to console for the time being
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    //first store data
    const formData = new formData(contactForm);
    //create object to output data to console
    const formObject = {};

    //store data, output to console w
    formObject.forEach((value, key) => {
      formObject[key] = value;
      console.log("Form Submitted: ", formObject);
    });
  });

  //handle reset, output to console
  clearButton.addEventListener("click", () => {
    contactForm.reset();
    console.log("Form Cleared");
  });
});
