window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get('id');
  const seatCount = urlParams.get('seats');

  if (movieId && seatCount) {
    const movie = JSON.parse(localStorage.getItem(movieId));
    if (movie) {
      document.getElementById('movie-title').textContent = movie.title;
      document.getElementById('movie-date').textContent = movie.date;
      document.getElementById('movie-time').textContent = movie.time;
      document.getElementById('seat-count').textContent = seatCount;
      document.getElementById('price-per-ticket').textContent = movie.price;
      document.getElementById('total-amount').textContent = movie.price * seatCount;
    } else {
      alert("Movie details not found!");
    }
  } else {
    alert("Missing booking data.");
  }
};

function goBack() {
  window.location.href = "index.html"; 
}
