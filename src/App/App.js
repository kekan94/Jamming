import React, { useCallback, useState } from 'react';

import './App.css';
import ArtistChooser from '../ArtistChooser/ArtistChooser';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../Authorization';

function App() {
  const [searchArtist, setSearchArtist] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const searchArtists = useCallback(searchArtistValue => {
    const main = document.getElementsByTagName("main")[0];
    const artistUrl = Spotify.searchArtist(searchArtistValue)
      .then(result => {
        main.setAttribute("style",
          `background-image: url(${result[0].url});`);
      });
  }, []);

  const search = useCallback(searchBarValue => {
    Spotify.searchResults(searchBarValue).then(setSearchResults);
  }, []);

  const addTrack = useCallback(track => {
    if (playlistTracks.some(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks(prevTracks => [...prevTracks, track]);
  }, [playlistTracks]);

  const removeTrack = useCallback(track => {
    setPlaylistTracks(prevTracks => 
      prevTracks.filter(currentTrack => currentTrack.id !== track.id)
    )
  }, []);

  const updatePlaylistName = useCallback(name => {
    setPlaylistName(name)
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    })
  }, [playlistName, playlistTracks]);

  return (
    <div>
      <h1>
        Ja<span className='highlight'>mmm</span>ing
      </h1>
      <main>
        <ArtistChooser onSearch={searchArtists} />
        <SearchBar onSearch={search}/>
        <div className="App">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
