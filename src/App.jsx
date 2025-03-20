import "./App.css";

const movies = [
  {
    title: "Assassin's Creed",
    year: "2006",
    runtime: "30 Mins",
    director: "Unknown",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0", // Replace with actual image
    genres: ["Crime", "Action"],
    imdbRating: "6.7",
    imdbVotes: "N/A",
  },
  {
    title: "Luke Cage",
    year: "2016",
    runtime: "55 Mins",
    director: "Unknown",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0", // Replace with actual image
    genres: ["Crime", "Action"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
  {
    title: "Doctor Strange",
    year: "2016",
    runtime: "N/A",
    director: "Unknown",
    image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEyOTYyMzUxNl5BMl5BanBnXkFtZTcwNTg0MTUzNA@@._V1_SX1500_CR0", // Replace with actual image
    genres: ["Fantasy", "Action"],
    imdbRating: "N/A",
    imdbVotes: "N/A",
  },
];

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Movie List Section</h1>
      <section className="w-full max-w-2xl flex flex-col items-center gap-6">
        {movies.map((movie, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl p-5 w-full max-w-sm">
            <img src={movie.image} alt={movie.title} className="w-full h-32 object-cover rounded-lg mb-3" />
            <h2 className="text-lg font-semibold text-gray-900">{movie.title}</h2>
            <p className="text-gray-600"><strong>Year:</strong> {movie.year}</p>
            <p className="text-gray-600"><strong>Runtime:</strong> {movie.runtime}</p>
            <p className="text-gray-600"><strong>Genres:</strong> {movie.genres.map((genre, idx) => (
              <span key={idx} className="inline-block bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full mr-2 mt-1">
                {genre}
              </span>
            ))}</p>
            <p className="text-gray-600"><strong>IMDB Ratings:</strong> {movie.imdbRating}</p>
            <p className="text-gray-600"><strong>IMDB Votes:</strong> {movie.imdbVotes}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
