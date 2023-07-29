document.addEventListener('DOMContentLoaded', () => {
    const profileDetails = document.getElementById('profileDetails');
    const logoutBtn = document.getElementById('logoutBtn');
  
    // Check if the user is logged in (has an access token)
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.accessToken) {
      window.location.href = 'signup.html';
    } else {
      displayUserProfile(user);
    }
  
    logoutBtn.addEventListener('click', () => {
      // Clear local storage and redirect to the signup page
      localStorage.clear();
      window.location.href = 'signup.html';
    });
  
    function displayUserProfile(user) {
      const profileHTML = `
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Access Token:</strong> ${user.accessToken}</p>
      `;
      profileDetails.innerHTML = profileHTML;
    }
  });