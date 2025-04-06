const API_KEY = '3f40ebf0'; 
const movies = ['Barbie as the Princess and the Pauper', 'Beauty and the Beast', 'Barbie and the Magic of Pegasus', 'Barbie as Rapunzel', 'Frozen', 'Barbie as the Island Princess', 'Barbie & the Diamond Castle', 'Tangled', 'Barbie of Swan Lake', 'Alice in Wonderland', 'Barbie in the Nutcracker', 'Sleeping Beauty', 'Cinderella', 'The Little Mermaid', 'Snow White and the Seven Dwarfs']; 

async function fetchMovieData(movie) {
    const response = await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=${API_KEY}`);
    const data = await response.json();
    return data;
}

async function displayMovies() {
    const movieList = document.getElementById("movie-list");

    for (let movie of movies) {
        const movieData = await fetchMovieData(movie);

        const movieCard = document.createElement("div");
        movieCard.classList.add("col-md-4", "mb-4");
        movieCard.innerHTML = `
            <div class="card movie-container">
                <img src="${movieData.Poster}" class="card-img-top" alt="${movieData.Title}">
                <div class="card-body">
                    <h5 class="card-title">${movieData.Title}</h5>
                    <p class="card-text">⭐ ${movieData.imdbRating}</p>
                </div>
                <div class="popup">
                    <h5>${movieData.Title}</h5>
                    <p><strong>Year:</strong> ${movieData.Year}</p>
                    <p><strong>Genre:</strong> ${movieData.Genre}</p>
                    <p><strong>Plot:</strong> ${movieData.Plot}</p>
                </div>
            </div>
        `;

        movieCard.addEventListener("mouseover", function () {
            movieCard.querySelector(".popup").style.display = "block";
        });

        movieCard.addEventListener("mouseleave", function () {
            movieCard.querySelector(".popup").style.display = "none";
        });

        movieList.appendChild(movieCard);
    }
}

displayMovies();
