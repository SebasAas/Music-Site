import React, { useState, useRef } from 'react';

// CSS
import 'assets/css/Music/Player/MusicPlayer.css'

import { connect } from 'react-redux';

function MusicPlayer() {

  const audioRef = useRef();
  const [showPlayPause, setShowPlayPause] = useState(true); // Valor para Reproducir o Pausar cancion
  const [maxDurationMusicSeconds, setMaxDurationMusicSeconds] = useState(0) // Valor en ss maximos de la cancion
  const [maxDurationMusic, setMaxDurationMusic] = useState("00:00"); // Label que nos muestra en mm:ss el maximo de la cancion
  const [currentTimeMusic, setCurrentTimeMusic] = useState(0); // Valor en ss actuales de la cancion
  const [actualTimePlaying, setActualTimePlaying] = useState("00:00"); // Label que nos muestra en formato los mm:ss
  const [actualVolume, setActualVolume] = useState(100);

  const setTimeMusic = (time) => {
    setMaxDurationMusicSeconds(time.target.duration)
    setMaxDurationMusic(calculateMinSec(time.target.duration)); // Retornamos MM : SS
  }

  const optionPlayPauseMusic = (type) => {
    if (type === "play") {
      audioRef.current.play();
      setShowPlayPause(false)
    } else {
      audioRef.current.pause();
      setShowPlayPause(true)
    }
  }

  const setVolumen = (volume) => {
    // Rango tiene que estar entre 0 y 1
    audioRef.current.volume = volume / 100
    setActualVolume(volume);
    // console.log(volume)
  }

  const calculateMinSec = (timeSeconds) => {
    const sec = parseInt(timeSeconds, 10); // Convertimos el valor si es string, en base 10
    let minutes = Math.floor((sec) / 60); // Obtenemos minutos
    let seconds = sec - (minutes * 60); //  Obtenemos segundos
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return minutes + ':' + seconds
  }

  const setCurrentMusicTime = (time) => {
    setActualTimePlaying(calculateMinSec(time.target.currentTime))
    setCurrentTimeMusic(time.target.currentTime)
  }

  const checkActualTime = (time) => {
    audioRef.current.currentTime = time;
    setCurrentTimeMusic(time);
  }

  const showSVGVolume = () => {
    if (actualVolume <= 0) {
      return (
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-volume-mute-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fullrule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .708 0z" />
          <path fullrule="evenodd" d="M9.146 5.646a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0z" />
        </svg>
      )
    } else if (actualVolume >= 1 && actualVolume <= 25) {
      return (
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-volume-off-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
        </svg>
      )
    } else if (actualVolume >= 26 && actualVolume <= 60) {
      return (
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-volume-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fullrule="evenodd" d="M8.717 3.55A.5.5 0 0 1 9 4v8a.5.5 0 0 1-.812.39L5.825 10.5H3.5A.5.5 0 0 1 3 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
          <path d="M10.707 11.182A4.486 4.486 0 0 0 12.025 8a4.486 4.486 0 0 0-1.318-3.182L10 5.525A3.489 3.489 0 0 1 11.025 8c0 .966-.392 1.841-1.025 2.475l.707.707z" />
        </svg>
      )
    } else if (actualVolume >= 60 && actualVolume <= 100) {
      return (
        <svg width="1.7em" height="1.7em" viewBox="0 0 16 16" className="bi bi-volume-up-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
          <path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z" />
          <path fullrule="evenodd" d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z" />
        </svg>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      <audio ref={audioRef}
        onTimeUpdate={(e) => setCurrentMusicTime(e)}
        value={currentTimeMusic}
        onLoadedMetadata={(e) => setTimeMusic(e)}
        preload="metadata">
        <source src="https://icecube-eu-279.icedrive.io/download?p=Sk4Pg9v5ogM%2FgleOwh3t3MpmfDBebDFxc%2FE2lseHWN2iGdO6p6YbQqPGyDdmF5taU86B%2BDVj%2FvK%2FX3G%2BDqUgS4gX8yXdbrTaSfwF6pq8a4XUm9arRmAYb8H0p626G23%2BOTuSL9vzE6dqmnT2usxdI32cgFHf248wSeDM%2BR54u26y8P53wdc9LNMjiNEFOEQqbudOeqkAIMtGq3UTW%2FBSLWnFYrPpNmfa9qVLX1GPZgY%3D" type="audio/mpeg" />
        <p> To listen to audio please enable JavaScript on a modern web browser</p>
      </audio>
      <div>
        <div className="music__table__main__container">
          <div className="music__table__options__container">
            <div className="col-lg-4 col-xl-4 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
              {/* <div>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-repeat" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M2.854 7.146a.5.5 0 0 0-.708 0l-2 2a.5.5 0 1 0 .708.708L2.5 8.207l1.646 1.647a.5.5 0 0 0 .708-.708l-2-2zm13-1a.5.5 0 0 0-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0 0-.708z" />
              <path fillRule="evenodd" d="M8 3a4.995 4.995 0 0 0-4.192 2.273.5.5 0 0 1-.837-.546A6 6 0 0 1 14 8a.5.5 0 0 1-1.001 0 5 5 0 0 0-5-5zM2.5 7.5A.5.5 0 0 1 3 8a5 5 0 0 0 9.192 2.727.5.5 0 1 1 .837.546A6 6 0 0 1 2 8a.5.5 0 0 1 .501-.5z" />
            </svg>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-music-note-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fillRule="evenodd" d="M12 3v10h-1V3h1z" />
              <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1V2.82z" />
              <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z" />
            </svg>
          </div> */}
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4  music__table__buttons__container">
              <button>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-caret-left-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                </svg>
              </button>

              {showPlayPause ?
                <button className="play__pause" value="play" onClick={(e) => optionPlayPauseMusic(e.currentTarget.value)}>
                  <svg width="2.5em" height="2.5em" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.5 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842l-5.576 3.584a.5.5 0 01-.77-.42z"></path>
                    <path fillRule="evenodd" d="M12 2.5a9.5 9.5 0 100 19 9.5 9.5 0 000-19zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"></path>
                  </svg>
                </button>
                :
                <button className="play__pause" value="pause" onClick={(e) => optionPlayPauseMusic(e.currentTarget.value)}>
                  <svg width="2.5em" height="2.5em" viewBox="0 0 16 16" className="bi bi-pause" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z" />
                  </svg>
                </button>
              }
              <button>
                <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-caret-right-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </button>
            </div>

            <div className="col-lg-4 col-xl-4 d-none d-xs-none d-sm-none d-md-block d-lg-block d-xl-block">
              <div className="music__table__button__volume">
                {showSVGVolume()}
                <input type="range" defaultValue={actualVolume} onChange={(e) => setVolumen(e.target.value)} />
              </div>
            </div>

          </div>
          <div className="col-lg-12 col-xl-12 d-none d-md-block d-lg-block d-xl-block">
            <div className="music__table__label__time">
              <p>{actualTimePlaying}</p>

              <input style={{ width: '500px' }} type="range"
                value={currentTimeMusic}
                onChange={(e) => checkActualTime(e.target.value)}
                max={maxDurationMusicSeconds}
              />

              <p>{maxDurationMusic}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(MusicPlayer);