import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import './App.css'

import playSound from './utils/playSound'
import useNfc from './utils/useNfc'
import ControlButtons from './ControlButtons'

function App() {
  const [soundName, setAllowed] = useNfc()
  const [audio, setAudio] = useState()
  useEffect(() => {
    const newAudio = playSound(soundName)
    setAudio((_) => newAudio)
  }, [soundName])

  return (
    <div className="App">
      <h1 style={{fontWeight: 'bold'}}>HELP!</h1>
      <p style={{fontSize: '3rem'}}>Notes on the use of distress signals</p>
      <div id="spacer" style={{height: '4rem'}}></div>
      <div className="container">
        {!soundName ? (
          <>
            <button className="startButton" onClick={() => setAllowed(true)}>
              <p>Tap to allow NFC reading.</p>
            </button>
          </>
        ) : soundName === 'unavailable' ? (
          <p>There isn't an NFC reader available on this device. Sorry!!</p>
        ) : soundName === 'ready' ? (
          <p>Listening for an NFC tag now.</p>
        ) : (
          <ControlButtons audio={audio} />
        )}
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
