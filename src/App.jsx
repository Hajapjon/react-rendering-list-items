import "./App.css";
import movies from "./data/movies.jsx";

function App() {
  return (
    <div className="App">
      {/* Movie Lists Section */}
      <section className="movie-list-section bg-white flex flex-col items-center gap-20">
        <h1 className="text-black text-[40px] font-medium mt-10">
          Movie List Section
        </h1>

        {/* Movie Lists */}
        {movies.map((movie) => {
          return (
            <div
              key={movie.title}
              className="flex gap-3 w-[400px] h-[250px] rounded-[10px] bg-white shadow-2xl shadow-[#917C7C40] justify-center items-start"
            >
              {/* Movie Poster */}
              <img
                src={movie.image}
                alt={`${movie.title} image`}
                className="w-[102px] h-[100px] rounded-[10px] mt-[25px]"
              />

              {/* Movie Details */}
              <div className="text-[#181818] justify-center font-normal flex flex-col gap-3 w-[231px] h-[211px] text-[14px] mt-[20px]">
                <p>Title: {movie.title}</p>
                <p>Year: {movie.year}</p>
                <p>Runtime: {movie.runtime}</p>
                <div>
                  {/* Genres */}
                  <p className="flex gap-2">
                    Genres:
                    {movie.genres.map((genre, index) => {
                      return (
                        <span
                          key={index}
                          className="text-[12px] bg-red-300/50 rounded-[10px] px-1"
                        >
                          {genre}
                        </span>
                      );
                    })}
                  </p>
                </div>
                <p>IMDB Rating: {movie.imdbRating}</p>
                <p>IMDB Votes: {movie.imdbVotes}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
