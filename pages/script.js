// Array of prepopulated strings
var strings = [
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0ketpCdUpLK4zjreYpDlLoE",
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0lwRXD3Sqe2_ZryiljuW-L9",
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0lnbXjnFF3bdEBbRHkr-R3k",
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0mQd_Z6eYbNa8Riyjl0znGC",
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLuWIxgNYqm0lXxPLZ9hBT9M46m53H5GES"
];

function generateRandomString() {
  // Get a random index from the strings array
  var randomIndex = Math.floor(Math.random() * strings.length);
  
  // Get the string at the random index
  var randomString = strings[randomIndex];
  
  // Set the src attribute of the iframe to the random string
  document.getElementById("flexi-flux").src = randomString;
}

// Call the function when the page loads
window.addEventListener("load", generateRandomString);
