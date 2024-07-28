
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AudioPlayer from './components/AudioPlayer';
import Songs from './components/Songs';
import Spotify from './components/Spotify';
import SignUp from './components/SignUp';
import Movies from './components/Movies';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="audio_player" element={<AudioPlayer />} />
        <Route path="songs" element={<Songs />} />
        <Route path="spotify" element={<Spotify />} />
        <Route path='sign_up' element={<SignUp />} />
        <Route path='movies/:movies_name' element={<Movies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
