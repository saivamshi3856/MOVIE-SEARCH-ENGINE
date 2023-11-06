var inputElement = document.getElementById("movie-bar")
var movieSearchbutton = document.getElementById("search-button")
var moviesWraperElement = document.getElementById("movies-wrapper")
var movieResponseElement = document.getElementById("response")


movieSearchbutton.addEventListener("click" , function(){
    moviesWraperElement .innerHTML = ""
    movieResponseElement.innerText = ""
    movieResponseElement.innerText = "Smile ^..^ you look good"
   fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${inputElement.value}`)
    .then ((res) => {
        inputElement.value = ""
       return res.json()
    }).then( (res2) => {
        if( res2.Response == "True"){
            movieResponseElement.innerText = ""
            var movieDetails = res2.Search
            movieDetails.map((movie,i) =>{
                console.log(movie)
                var movieCardElement  = document.createElement("div");
                movieCardElement.className = "movie-card"
                var movieImageElement = document.createElement("img");
                movieImageElement.className="movie-poster"
                movieImageElement.src = movie.Poster
                var movieTitleElement = document.createElement("p")
                movieTitleElement.innerHTML = `Title: <b> ${movie.Title}</b>`
                var movieYearElement = document.createElement("p")
                movieYearElement.innerHTML =`Year: <b>${movie.Year} </b>`
                movieCardElement.append(movieImageElement,movieTitleElement,movieYearElement)
                moviesWraperElement.appendChild(movieCardElement)
    
            })



        }else{
            inputElement.value = ""
            movieResponseElement.innerText = ""
            movieResponseElement.innerText = "Sorry no movie is found"
            console.log("Their is no movie with that word")

        }
      
    })
 
})