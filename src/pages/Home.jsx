import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies()
        setMovies(popularMovies)
      } catch (err) {
        console.log(err)
        setError("Failed to load movies...")
      }
      finally {
        setLoading(false)
      }
    }
    loadPopularMovies()
  }, [])

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return
    setLoading(true)
    try{
      const searchResults = await searchMovies(searchQuery)
      setMovies(searchResults)
      setError(null)
    }catch(err){
      console.error(err);
      setError('fail to search movies...')
    }finally{
      setLoading(false)
    }

    // setSearchQuery("");
  };

  return (
    <>
      <div className="home h-screen w-full overflow-scroll scrollbar-hide px-4 pb-12 bg-background-color text-white">
        <form onSubmit={handleSearch} className="search-form text-center">
          <input
            type="text"
            placeholder="Search for movies..."
            className="search-input m-4 p-4 border-0 rounded outline-0 bg-search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit"
            className="search-button bg-search-button p-4 border-0 rounded"
          >
            <span className="block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden">🔍</span>
            <span className="hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden">🔍</span>
            <span className="hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden">Search</span>
            <span className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">Search</span>
            <span className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block">Search</span>
          </button>
        </form>

        {error && <div className="errror-message">{error}</div>}

        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid justify-items-center w-4/5 grid gap-4 mx-auto grid-cols-1 /*responsive*/ md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full 2xl:grid-cols-5 w-full">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
        )}


      </div>
    </>
  );
}

export default Home;

