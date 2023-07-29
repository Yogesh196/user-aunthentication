document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const messages = document.getElementById('messages');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      messages.textContent = "Password and Confirm Password do not match.";
      return;
    }

    const accessToken = generateAccessToken();

    // Store user details and access token in local storage
    localStorage.setItem('user', JSON.stringify({ username, email, accessToken }));

    messages.textContent = 'Signup successful! Redirecting to the profile page...';
    setTimeout(() => {
      window.location.href = 'profile.html';
    }, 2000);
  });

  function generateAccessToken() {
    // Generate a random 16-byte string as an access token (simplified version)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let accessToken = '';
    for (let i = 0; i < 16; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      accessToken += characters[randomIndex];
    }
    return accessToken;
  }
});






