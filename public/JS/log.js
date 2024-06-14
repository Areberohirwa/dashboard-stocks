import { databaseUrl } from './server';

export const client = new MongoClient(databaseUrl);


document.addEventListener('DOMContentLoaded', (event) => {

    const form = document.getElementById('login-form');
  
    form.addEventListener('submit', async function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Get the values from the form
      const username = document.getElementById('exampleInputText1').value;
      const password = document.getElementById('exampleInputPassword1').value;
  
      try {
        // Fetch the correct password from the database
        const correctPassword = await getCorrectPassword(username);
  
        // Check if the password is correct
        if (password === correctPassword) {
          // Display success alert and reload the page
          alert("You have successfully logged in.");
          location.reload();
        } else {
          // Display failure alert
          alert("Login unsuccessful. Please check your username and password.");
        }
      } catch (error) {
        console.error("Error retrieving password:", error);
        alert("An error occurred. Please try again later.");
      }
    });
  
    // Show/Hide password functionality
    const userInput = document.getElementById('exampleInputText1');
    const passwordInput = document.getElementById('exampleInputPassword1');
    const showPasswordCheckbox = document.getElementById('exampleCheck1');
  
    showPasswordCheckbox.addEventListener('change', function() {
      if (this.checked) {
        passwordInput.type = 'email';
      } else {
        passwordInput.type = 'password';
      }
    });
  });
  
  