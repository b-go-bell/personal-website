import './../../resources/styles/components/leisure/LeisureContent.scss'
import duet from './../../resources/media/leisure/music/duet2022.mov'
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import SpotifyWebApi from 'spotify-web-api-js';

function Music() {

    const [accessToken, setAccessToken] = useState('');
    const [musicId, setMusicId] = useState(0);
    const [likedSongsPlaylist, setLikedSongsPlaylist] = useState([]);
    const [playlist, setPlaylist] = useState([]);

    const spotifyApi = new SpotifyWebApi();
    if (accessToken) {
        spotifyApi.setAccessToken(accessToken);
    }
    else {
        console.log("no token")
    }

    useEffect(() => {
        fetch("https://personal-website-backend.vercel.app/spotify-api")
        .then((res) => res.json())
        .then((data) => setAccessToken(data.token));
    }, [] )

    useEffect(() => {
        if(accessToken){
            spotifyApi.getPlaylist("1nIJsnfzlziDndaTLmBe4r")
            .then((data) => {
                setLikedSongsPlaylist(data.tracks.items);
            });
        }
    }, [accessToken]);

    useEffect(() => {
        if(likedSongsPlaylist)
            setPlaylist(shuffle(likedSongsPlaylist));
    }, [likedSongsPlaylist]);

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;

          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }

        return array;
      }


    function getSong(song){
        console.log(song)
        return(
            <div className="music-carousel-content">
                <img src={song.track.album.images[0].url} alt="highlighted song album cover"/>
            </div>
        )
    }

    function carouselCaption() {
        if(playlist.length === 0) {
            return (
                <div className="m-leisure-content-h3">
                    Oh no, it looks like Spotify isn't connecting right now :/
                </div>
            );
        }
        console.log(playlist[musicId].track)
        return(
            <div className="m-leisure-content-h3">
                {playlist[musicId].track.name}, <span className="italic">{playlist[musicId].track.artists[0].name}</span>
            </div>
        )
    }


    function getSongCarousel() {
        if(!playlist || playlist.length === 0) {
            return (
                <div className="music-carousel">
                    Oh no, it looks like Spotify isn't connecting right now :/
                </div>
            );
        }

        var song_arr = [];

        song_arr.push(getSong(playlist[0]));
        for(var i = 1; i < playlist.length; i++){
            song_arr.push(getSong(playlist[i]));
        }


        return(
            <div className="music-carousel">
                <Carousel autoPlay={true}
                    onChange={(index) => {setMusicId(index)}}
                    infiniteLoop={true}
                    showStatus={false}
                    dynamicHeight={true}
                    showThumbs={false}
                    showIndicators={false}>
                    {song_arr}
                </Carousel>
                {carouselCaption()}
            </div>
        );
    }


    return(
        <div className="leisure-content-container">
            <div className="content-container-header">
                currently listening to—
            </div>
            <div className="music-content-container">
                <div className="viola-leisure-content">
                    I almost always have music playing. I cycle in and out of songs, artists, and genres (which
                    unfortuantely makes for a very messy Spotify), but no matter what the state of my other playlists
                    are, I always try to keep my "favorites" playlist up-to-date with all my favorite
                    songs, no matter how well the songs in said playlist sound together.
                    <br/>
                    <br/>
                    I thought it would be fun and insightful for people to get a taste of this playlist, so I included the
                    songs on it to the right. If you're additionally interested in seeing my other playlists, however,
                    you can <a className="linked-content" target="_blank" href="https://open.spotify.com/user/d21cs4pdm4xlyug5c9aypcsz1">check them out here!</a>
                </div>
                <div className="content-container-sl">
                    {getSongCarousel()}
                </div>
            </div>
            <div className="content-container-header">
                currently playing—
            </div>
            <div className="music-content-container">
                <div className="vid">
                    <video controls className="video-width">
                        <source src={duet} type="video/webm"/>
                        Oh no! It looks like your browser doesn't support video :(
                    </video>
                    <div className="m-leisure-content-h3">
                        W.F. Bach — Duet for two Violas (Falck 61) No.3 Alla Breve
                    </div>
                </div>
                <div className="tennis-leisure-content">
                    There's always music playing in my family's home—in the mornings, usually some type
                    of classical. Mozart, Beethoven, and Brahms were no strangers, but my favorite
                    has always been Bach. I loved the spiraling redundancies and warm melodies that were
                    found in the Rennaisance and Baroque periods. It was this era
                    that had me longing to play the violin since age three.
                    <br/>
                    <br/>
                    I started playing violin when I was six, and transitioned to playing viola when I was
                    nine. While I don't exactly have a musical knack, get pretty nervous about playing
                    in front of people, and most definitely don't practice enough, I've continued to play
                    and participate in solo classes and chamber groups at USC because I enjoy it so much!
                </div>
            </div>
            {/* <div className="music-content-container">
                <div>
                    <video controls>
                        <source src={quartet} type="video/mp4"/>
                        Oh no! It looks like your browser doesn't support video :(
                    </video>
                </div>
            </div> */}
        </div>
    );
}

export default Music;