import React from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import {Button} from '@mui/material'

const buttonStyle = {
  color: 'black',
  borderRadius: '1rem',
}
const styling = {
  height: '4rem',
  width: '4rem',
}
const ControlButtons = ({audio}) => {
  return (
    <div className="buttonContainer">
      <Button style={buttonStyle} onClick={() => audio && audio.play()}>
        <PlayArrowIcon style={styling} />
      </Button>
      <Button style={buttonStyle} onClick={() => audio && audio.pause()}>
        <PauseIcon style={styling} />
      </Button>
    </div>
  )
}

export default ControlButtons
