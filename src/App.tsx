import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddSong from "./components/AddSong";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import TopArtists from "./components/TopArtists";
import TopSongs from "./components/TopSongs";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/top-10-artists" element={<TopArtists />} />
        <Route path="/top-10-songs" element={<TopSongs />} />
        <Route path="/add-song" element={<AddSong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
