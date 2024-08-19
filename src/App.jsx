import "./App.css";
import Header from "./Components/Header";
import MovieGenreList from "./Components/MovieGenreList";
import Slider  from "./Components/Slider";
import VideoCard from "./Components/VideoCard";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <VideoCard/>
      <MovieGenreList/>
    </div>
  );
}

export default App;
