const form = document.querySelector('.search-form');
const input = form.querySelector('input');
const cards = document.querySelectorAll('.cards article');

form.addEventListener('submit', function(event) {
	event.preventDefault(); // Prevent the form from submitting and refreshing the page
	
	const searchTerm = input.value.toLowerCase(); // Get the search term and convert to lowercase
	
	cards.forEach(function(card) {
		const title = card.querySelector('h2').textContent.toLowerCase(); // Get the title of the card and convert to lowercase
		
		if (title.includes(searchTerm)) {
			card.style.display = 'block'; // Show the card if the search term is found in the title
		} else {
			card.style.display = 'none'; // Hide the card if the search term is not found in the title
		}
	});
});
