import React, { useState, useEffect } from "react";
import NewSonForm from "./NewSonForm";
const { uuid } = require("uuidv4");

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "run", id: 1 },
    { title: "jump", id: 2 },
    { title: "play", id: 3 }
  ]);

  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log("jfkajdfg", songs);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSonForm addSong={addSong} />
    </div>
  );
};

export default SongList;
