// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Get the current year for the footer
document.getElementById('year').textContent = new Date().getFullYear();

// Search Functionality
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const recipeCards = document.querySelectorAll('.recipe-card');
  
  // Add event listener for the search input
  searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    // Loop through all recipe cards and show/hide based on search term
    recipeCards.forEach(function(card) {
      const recipeTitle = card.getAttribute('data-title').toLowerCase();
      
      // Check if the recipe title includes the search term
      if (recipeTitle.includes(searchTerm)) {
        card.style.display = 'inline-block'; // Show the recipe card
      } else {
        card.style.display = 'none'; // Hide the recipe card
      }
    });
  });
});


// Simple contact form validation
const contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector("textarea").value.trim();

    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill out all fields before submitting.");
    } else {
      alert("Thanks for contacting us, " + name + "!");
    }
  });
}
