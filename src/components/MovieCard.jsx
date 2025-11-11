import { useMovieContext } from "../contexts/MovieContext"

function MovieCard({ movie }) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)

    function onFavouriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return(
        <>
            <div className="movie-card bg-movie-card group flex justify-between flex-col w-60 h-auto md:w-47 lg:w-60 h-auto xl:w-61 h-auto 2xl:w-69">
                <div className="movie-poster relative">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay bg-movie-card-info border border-white rounded-full w-4 h-4 m-2 text-center absolute top-0 right-0 sm:block md:block lg:block xl:hidden group-hover:block 2xl:hidden group-hover:block p-4">
                        <button className={`favourite-btn w-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${favorite ? 'text-red-700' : 'text-white'}`} onClick={ onFavouriteClick }>
                            ❤︎
                        </button>
                    </div>
                </div>

                <div className="movie-info group-hover:bg-movie-card-info transition duration-700 ease-out">
                    <h3 className="px-2 py-1">{movie.title}</h3>
                    <p className="px-2 py-1">{movie.release_date?.split('-')[0]}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard

