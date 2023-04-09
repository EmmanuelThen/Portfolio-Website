//Slide in from left animation for projects
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show'); //this is to animate every single time not only once
            entry.target.classList.remove('show2');
        }
    })
});
const hiddenElements = document.querySelectorAll('.hidden'); // Grabbing all elements with 'hidden' class 
hiddenElements.forEach((element) => observer.observe(element));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((element) => observer.observe(element));

//Burger menu on click




//
const toggleBtn = document.querySelector('.input');
const body = document.querySelector('body');

// Check if there is a saved preference in localStorage
const isDarkMode = localStorage.getItem("isDarkMode") === "true";

// Set the toggle state based on the saved preference
if (isDarkMode) {
  toggleBtn.checked = true;
  body.classList.add("dark-mode");
} else {
  toggleBtn.checked = false;
  body.classList.remove("dark-mode");
}

// Add an event listener to the toggle button
toggleBtn.addEventListener("click", function() {
  // Toggle the isToggled variable
  const isToggled = toggleBtn.checked;

  // Check the screen size and set the body class to the appropriate mode
  if (isToggled || window.innerWidth < 768) {
    body.classList.add("dark-mode");
    localStorage.setItem("isDarkMode", "true");
  } else {
    body.classList.remove("dark-mode");
    localStorage.setItem("isDarkMode", "false");
  }
});