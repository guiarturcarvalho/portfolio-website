function addRecommendation() {
  const name = document.getElementById('rec_name').value.trim();
  const message = document.getElementById('rec_message').value.trim();
  if (!message) return;

  const recDiv = document.createElement('div');
  recDiv.className = 'recommendation';
  recDiv.textContent = name ? `"${message}" — ${name}` : `"${message}"`;

  document.getElementById('new_recommendations').appendChild(recDiv);

  document.getElementById('rec_name').value = '';
  document.getElementById('rec_message').value = '';

  showPopup(true);
}

function showPopup(show) {
  document.getElementById('popup').style.display = show ? 'block' : 'none';
}

function closePopup() {
  showPopup(false);
}
