

function MovieCard({ movie }) {

    function onFavouriteClick() {
        alert('Clicked')
    }

    return(
        <>
            <div className="movie-card bg-movie-card group flex justify-between flex-col w-55 h-auto md:w-47 lg:w-60 h-auto xl:w-61 h-auto 2xl:w-69">
                <div className="movie-poster relative">
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay bg-movie-card-info rounded-full w-4 h-4 m-2 text-center absolute top-0 right-0 hidden group-hover:block p-4">
                        <button className="favourite-btn w-4 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" onClick={ onFavouriteClick }>
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

