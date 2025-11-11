import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="bg-background-color h-screen flex flex-col pb-12 items-center">
        <h2 className="text-2xl font-bold my-4 text-white">Your Favorites</h2>
        <div className="movies-grid justify-items w-full grid gap-4 mx-auto place-items-center grid-cols-1 /*responsive*/ md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full 2xl:grid-cols-5 w-full">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  // return (
  //   <>
  //     <div className="favorite-empty bg-background-color h-screen text-white pt-24 px-12">
  //       <div className="vvorite-card bg-empty-favorite-card text-center border-none rounded-lg p-12">
  //         <h2 className="text-2xl text-red-500 font-bold mb-4">
  //           No Favorite Movies Yet
  //         </h2>
  //         <p>
  //           Start adding movies to your favorites and they will appear here.
  //         </p>
  //       </div>
  //     </div>
  //   </>
  // );
}


export default Favorites;
