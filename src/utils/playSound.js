// plays sound given string input of short notename

const keys = {
  mayday: 'MV_Summit_Venture_Mayday_Call.flac.mp3',
  sos: 'SOS_morse_code.ogg.mp3',
  'ship horn': 'Ship Horn.mp3',
  'electric horn': 'electric horn and echo 2003 mono.mp3',
  'sweep up': 'COSPAS-SARSAT_Locator_Beacon_Sweep_Up.ogg.mp3',
  'sweep down': 'COSPAS-SARSAT_Locator_Beacon_Sweep_Down.ogg.mp3',
}

const playSound = (soundname) => {
  if (!keys[soundname]) return
  const filename = `src/sound/${keys[soundname]}`
  const audio = new Audio(filename)
  audio.play()
  return audio
}

export default playSound
