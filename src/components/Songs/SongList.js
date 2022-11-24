import { useState } from "react";
import Song from "./Song";
 
const SongList = () => {

    const [visible, setVisible] = useState(false);
    
    const toggleVisibility = () => {
        setVisible(!visible);
    }
    const initialSongs = [
        {title : "Last thing on my mind", artist: "Steps", votes: 0},
        {title: "If you're over me", artist: "Years and years", votes :0 },
        {title: "Top of the world", artist: "Carpenters", votes :0 },
        {title: "Sometimes", artist: "Erasure", votes :0 }
    ];

    const [song, setSongs] = useState(initialSongs);
    const addVote = () => {}

    //VERSION 1 - LONG HAND OLD STYLE JAVASCRIPT
    // const displaySongs = [];
    // for(const [index, value] of songs.entries()) {
    //     displaySongs.push(<Song key={index} song={value} vote={addVote} />)
    // }
    // console.log(displaySongs)

    //VERSION 2 - MODERN JAVASCRIPT
    //const displaySongs = songs.map ( (value, index) => <Song key={index} song={value} vote={addVote} />)
 
 //   const displaySongs = [];    
    
    //const [song1, setSong1] = useState({title :"Last thing on my mind", artist: "Steps", votes:0});
    //const [song2, setSong2] = useState({title :"If you are over me", artist:"Years and Years", votes:0});

   // const changeSong1 = () =>{
        //set song title to "Tragedy"
       // const tempSong = song1;
       // tempSong.title = "Tragedy";
       // setSong1(tempSong);
        setSong1({...song1, title: "Tragedy"})
        //setSong1({title: "Tragedy", artist:"Steps"});
    }
    const voteForSong1 = () => {
          setSong1({...song1, votes : song1.votes + 1})
    }
    const voteForSong2 = () => {
         setSong2({...song2, votes : song2.votes + 1})
    }
 return (
    <div>
        <h1> Your favourite songs are :</h1>
      <button onClick={toggleVisibility}>{visible ? "Hide" : "Show"} songs </button> 
        <ul className={visible ? "songs-display" : "songs-hidden"}>
            <Song song={song1} vote={voteForSong1} />
            <Song song={song2} vote={voteForSong2} />
           </ul>
        <button onClick={changeSong1}>Change song 1</button>
    </div>
 )
}
export default SongList;