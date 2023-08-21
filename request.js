// https://api.themoviedb.org/3/discover/movie?api_key=a7fb53a4ef158522f88e3769eef4a301&with_genres=adventure

const API_KEY = "a7fb53a4ef158522f88e3769eef4a301";

const requests = {
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,

  fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,

  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;


// MOVIE
// Action          28
// Adventure       12
// Animation       16
// Comedy          35
// Crime           80
// Documentary     99
// Drama           18
// Family          10751
// Fantasy         14
// History         36
// Horror          27
// Music           10402
// Mystery         9648
// Romance         10749
// Science Fiction 878
// TV Movie        10770
// Thriller        53
// War             10752
// Western         37