const signUpButton = document.querySelector('.sign-up-btn');
const modal = document.getElementById('signup-modal');
const closeBtn = document.querySelector('.close');
const signUpForm = document.querySelector('#signup-modal form');
const errorMessage = document.querySelector('.error-message');
const signInButton = document.querySelector('.sign-in-btn');
const signInModal = document.getElementById('signin-modal');
const signInCloseBtn = document.querySelector('#signin-modal .close');
const signInForm = document.querySelector('#signin-modal form');
const signInErrorMessage = document.querySelector('#signin-modal .error-message');
const signUpModal = document.getElementById('signup-modal');
const signUpOpenBtn = document.querySelector('#signin-modal #signup-link');
signUpButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();
    
      const name = document.getElementById('name').value;
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
    
      if (!name || !username || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill out all the fields.';
      } else if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
      } else {
        errorMessage.textContent = ''; 
        
      }
    });
signInButton.addEventListener('click', () => {
  signInModal.style.display = 'block';
});

signInCloseBtn.addEventListener('click', () => {
  signInModal.style.display = 'none';
});

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
    signInErrorMessage.textContent = 'Please fill out all the fields.';
  } else {
    signInErrorMessage.textContent = ''; // Clear any previous error messages
    // Add your sign-in logic here
  }
});

signUpOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  signInModal.style.display = 'none';
  signUpModal.style.display = 'block';
});

const createPostButton = document.querySelector('.create-post-btn');
const createPostModal = document.getElementById('create-post-modal');
const createPostCloseBtn = document.querySelector('#create-post-modal .close');

createPostButton.addEventListener('click', () => {
  createPostModal.style.display = 'block';
});

createPostCloseBtn.addEventListener('click', () => {
  createPostModal.style.display = 'none';
});
