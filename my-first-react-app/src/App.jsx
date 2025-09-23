import React, { useState, useEffect } from 'react';
import {useDebounce} from 'react-use';
import Search from './components/Search.jsx';
import Spinner from './components/Spinner.jsx';
import MovieCard from './components/MovieCard.jsx';
import {getTrendingMovies,updateSearchCount} from './appwrite.js';

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Make sure this is your v3 key in .env

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(''); 
  const [trendingMovies, setTrendingMovies] = useState([])

  // Using useDebounce to delay the search term update
  // This will help reduce the number of API calls made while typing
  // It waits for 500ms(half second) after the last change before updating the debouncedSearchTe rm
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);
  
  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}&api_key=${API_KEY}&sort_by=popularity.desc` :`${API_BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setErrorMessage("No movies found.");
        setMovieList([]);
        return;
      }
      setMovieList(data.results);

      if(query && data.results.length > 0){
        // Update search count in Appwrite
        await updateSearchCount(query, data.results[0]);
      }

      setErrorMessage('');
    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage("Failed to fetch movies. Please try again later.");
    }
    finally {
      setIsLoading(false);
    }
  };

  // Fetch trending movies on initial load
  
  const loadTrendingMovies = async () => {
    try{
      const movies = await getTrendingMovies();
      if(movies && movies.length > 0) {
        setTrendingMovies(movies);
      }
    }
    catch(error) {
      console.error("Error fetching trending movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies </span>You'll Enjoy Without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
        <section className="trending">
          <h2>Trending Movies</h2>
          <ul>
            {trendingMovies.map((movie, index) => (
              <li key={movie.$id}>
                <p>{index+1}</p>
                <img src={movie.poster_url} alt={movie.movie_title} />
              </li>
            ))}
          </ul>
        </section>
          
        )}

        <section className="all-movies">
          <h2>All Movies</h2>
          {
            isLoading ? <Spinner />
            : errorMessage ? <p className='text-red-500'>{errorMessage}</p>
            : (<ul>
              {movieList.map((movie) =>  (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>)  
          }
        </section>
      </div>
    </main>
  );
};

export default App;
