let movies = [];

fetch ("./js/data/movies.json")
.then(response => response.json())
.then(data => {
    movies = data;
    renderMovies(movies)
})
.catch(error => console.error(error)); //fetching the movie json data

const movieGrid = document.getElementById('movie-grid'); //getting the movieGrid element
function renderMovies(movies) {
    movieGrid.innerHTML = '';
    for (let movie of movies) {
        const card = document.createElement("div");
        card.classList.add("movie-card");
        card.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <h3>${movie.title} (${movie.year})</h3>
            <p class="genre">${movie.genre}</p>
            <p class="description">${movie.description}</p>
        `;
        card.addEventListener("click", () => openModal(movie)); //added an event listener for when the modal should open
        movieGrid.appendChild(card);
    }
}


const buttons = document.querySelectorAll('.filter-btn');
buttons.forEach(button =>{
    button.addEventListener('click', (event) => {
        buttons.forEach(btn => btn.classList.remove('active'))
        button.classList.add('active') // setting the active button to the button clicked
        const genre = button.dataset.genre
        filterButton(genre) // dynamically genrating the genre based on the filter button thats clicked
    })
})

function filterButton(genre){
    movieGrid.innerHTML=''// refreshing the grid for a new rendering
    if(genre  === "all"){
         renderMovies(movies) //loading all movies for the all genre
            return
    }
    const filteredMovies = movies.filter(movie => movie.genre === genre) //filtering the movies based on the genre of the button selected
    renderMovies(filteredMovies)
}


const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalTrailer = document.getElementById("modal-trailer");
const closeBtn = document.querySelector(".modal .close"); //getting the modal elements by their ids

function openModal(movie){
    modalTitle.textContent = movie.title;
    modalTrailer.src = movie.trailer; // embed link
    modal.style.display = "flex";
} //function to open the modal and load the video

function closeModal() {
    modal.style.display = "none";
    modalTrailer.src = ""; // stop video
} //close the modal

closeBtn.addEventListener("click", closeModal)