import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./MovieCard";
// api key 75362310

const API_KEY = "http://www.omdbapi.com?apikey=75362310";

const App = () => {

  const [movies, setMovies] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  
  const searchMovies = async (title) => {
    const res = await fetch(`${API_KEY}&s=${title}`);
    const data = await res.json();
    
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  
  return (
    <div className="App">
      <h1>Movie World</h1>

      <div className="search">
        <input 
          placeholder="Search for a movie" 
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}/>
        
        <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie, index) => (
              <MovieCard key={index} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
