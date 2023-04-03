const form = document.querySelector('.search-form');
const input = form.querySelector('input');
const cards = document.querySelectorAll('.cards article');
const categoryButtons = document.querySelectorAll('.categories .btn');
const loginButton = document.getElementById('login-button');

categoryButtons.forEach(button => {
	button.addEventListener('click', () => {
	  // Remove the 'active' class from all buttons
	  categoryButtons.forEach(btn => btn.classList.remove('active'));
	  // Add the 'active' class to the clicked button
	  button.classList.add('active');
  
	  // Show or hide cards based on the clicked button's category
	  const category = button.dataset.category;
  
	  cards.forEach(card => {
		// If the card belongs to the clicked category or the category is "all", show it, otherwise hide it
	    if (category === 'all') {
			card.style.display = 'block';
		  } else if (card.dataset.category === category) {
			card.style.display = 'block';
		  } else {
			card.style.display = 'none';
		  }
	  });
	});
  });
  
  const searchForm = document.querySelector('.search-form');
  const searchInput = searchForm.querySelector('input');
  const searchBtn = searchForm.querySelector('button');
  
  searchBtn.addEventListener('click', e => {
	e.preventDefault();
  
	const searchTerm = searchInput.value.trim().toLowerCase();
  
	cards.forEach(card => {
	  const title = card.querySelector('h2').textContent.trim().toLowerCase();
  
	  if (title.includes(searchTerm)) {
		card.style.display = 'block';
	  } else {
		card.style.display = 'none';
	  }
	});
  });
  vloginButton.addEventListener('click', () => {
	// Handle login functionality here
  });
  