import React, { useState } from "react";

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
      <ul>
        {playlist.map((url, index) => (
          <li
            key={index}
            style={{ fontWeight: url === currentVideo ? "bold" : "normal" }}
          >
            {url}
            <button onClick={() => handleRemove(url)}> X Remove</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
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
