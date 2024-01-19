import { useState } from "react";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Playlist from "./components/Playlist/Playlist";

function App() {
  const [playlist, setPlaylist] = useState([
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  ]);

  const [currentVideo, setCurrentVideo] = useState("");

  return (
    <>
      <VideoPlayer
        playlist={playlist}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <Playlist
        playlist={playlist}
        currentVideo={currentVideo}
        setPlaylist={setPlaylist}
      />
    </>
  );
}

export default App;
