document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
  
      if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        confirmPasswordInput.classList.add("is-invalid");
      } else {
        confirmPasswordInput.classList.remove("is-invalid");
        alert("Sign up successful!");
        
        form.submit();
      }
    });
  
    confirmPasswordInput.addEventListener("input", () => {
      confirmPasswordInput.classList.remove("is-invalid");
    });
  });
  