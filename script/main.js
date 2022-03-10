// APP: SLIDING OPTION POPUP.
// Invoke 'strict mode'.
"use strict";
// Set up HTML element variables.
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
// Event listeners.
signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));