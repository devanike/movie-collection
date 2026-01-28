fetch ("./js/data/movies.json")
.then(response => response.json())
.then(data => {renderMovies(data)})
.catch(error => console.error(error)); //fetching the movie json data

const movieGrid = document.getElementById('movie-grid'); //getting the movieGrid element
function renderMovies(movies){
    movieGrid.innerHTML = ''; // refreshing the grid for a new rendering
    for(let movie of movies){
        movieGrid.innerHTML += `
        <div class='movie-card'>
        <img src= ${movie.poster} alt='${movie.title}'>
        <h3>${movie.title} (${movie.year})</h3>
        <p class='genre'>${movie.genre}</p>
        <p class='description'>${movie.description}</p>
        </div>
        ` // rendering the movie grid
    }
}