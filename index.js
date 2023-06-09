  //Dark-mode
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
    if (isToggled) {
      body.classList.add("dark-mode");
      localStorage.setItem("isDarkMode", "true");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("isDarkMode", "false");
    }
  });

//hamburger transform into an 'X' and drops menu when clicked 
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('show-menu');
});









// Theme will display when page is loaded based on users system settings (dark or light)
document.addEventListener('DOMContentLoaded', () => {
    const darkModeSystemSettings = () => {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Set dark mode on
        document.body.classList.add('dark-mode');
        toggleBtn.checked = true;
      } else {
        // Set dark mode off
        document.body.classList.remove('dark-mode');
        toggleBtn.checked = false;
      }
    }
    // Call the function to set initial dark mode based on system settings
    darkModeSystemSettings();
  });
  



// Made an array for each arrow at the end of the sections and  each section ID
const arrowDownIds = ['arrow-down-1', 'arrow-down-2', 'arrow-down-3'];
const navDownIds = ['nav-down-1', 'nav-down-2', 'nav-down-3'];
const nextSectionIds = ['section-1', 'section-2', 'section-3'];

// Loops through the arrays and adds event listeners to each arrow
arrowDownIds.forEach((id, index) => {
  const arrow = document.getElementById(id);
  const section = document.getElementById(nextSectionIds[index]);

  arrow.addEventListener('click', () => {
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

navDownIds.forEach((id, index) => {
    const nav = document.getElementById(id);
    const section = document.getElementById(nextSectionIds[index]);

    nav.addEventListener('click', () => {
      section.scrollIntoView({behavior: 'smooth'});
    })
})

//Lets-connect when it is clicked opens a new window for user to send a message and send it to my email
const modal = document.querySelector('.modal');
const connectButtonBottom = document.getElementById('connect-button');
const connectButtonTop = document.getElementById('connect-button-top');
const btnCloseModal = document.querySelector('.close-btn');
const cancelBtn = document.querySelector('.btn-cancel');


connectButtonBottom.addEventListener('click', () => {
  modal.style.display = 'block';
});

connectButtonTop.addEventListener('click', () => {
  modal.style.display = 'block'
})

btnCloseModal.addEventListener('click', () => {
    modal.style.display = 'none';
});












//Intersection observers for animations that will not animate on mobile (less than 768px) due to glitchy effect
//const isMobile = window.matchMedia("max-width: 767px").matches;

  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { 
      entry.target.classList.add('show');
      entry.target.classList.add('show2');
    } else {
      entry.target.classList.remove('show');
      entry.target.classList.remove('show2');
    }
  })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((element) => observer.observe(element));







