/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';

function YouTubePlayer() {
  const playerRef = useRef(null);
  const doneRef = useRef(false);

  useEffect(() => {
    // Cargar la API de YouTube de forma asincrónica
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      const YT = window.YT; // Asignar YT a la variable global
      playerRef.current = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'fRL3BRVKf5s',
        playerVars: {
          'playsinline': 1
        },
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    };

    // 4. The API will call this function when the video player is ready.
    const onPlayerReady = (event) => {
      event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    // The function indicates that when playing a video (state=1),
    // the player should play for six seconds and then stop.
    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.PLAYING && !doneRef.current) {
        setTimeout(stopVideo, 120000);
        doneRef.current = true;
      }
    }

    const stopVideo = () => {
      playerRef.current.stopVideo();
    }

    return () => {
      // Limpiar la función global al desmontar
      delete window.onYouTubeIframeAPIReady;
    };
  }, []);

  return (
    <div id="player" className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"></div>
  );
}

export default YouTubePlayer;
