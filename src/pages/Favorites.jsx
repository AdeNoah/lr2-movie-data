

function Favorites() {

    return (
        <>
            <div className="favorite-empty bg-background-color h-screen w-screen text-white pt-24 px-12">
                <div className="favorite-card bg-empty-favorite-card text-center border-none rounded-lg p-12">
                    <h2 className="text-2xl text-red-500 font-bold mb-4">No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here.</p>
                </div>
            </div>
        </>
    )
}

export default Favorites;

