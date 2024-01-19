import React, { useState } from "react";
import "./playlist.css";

interface PlaylistProps {
  playlist: string[];
  currentVideo: string;
  setPlaylist: (playlist: string[]) => void;
}

const Playlist: React.FC<PlaylistProps> = ({
  playlist,
  currentVideo,
  setPlaylist,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleRemove = (url: string) => {
    setPlaylist(playlist.filter((videoUrl) => videoUrl !== url));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPlaylist([...playlist, inputValue]);
    setInputValue("");
  };

  return (
    <>
      <ul className="playlist">
        {playlist.map((url, index) => (
          <li
            key={index}
            className={url === currentVideo ? "current-video" : "video"}
          >
            {url}
            <button onClick={() => handleRemove(url)}> Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="add-to-playlist">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter video URL"
        />
        <button type="submit">Add to playlist</button>
      </form>
    </>
  );
};

export default Playlist;
