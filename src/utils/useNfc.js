import {useState, useEffect} from 'react'

// three possible return values
// if device incompatible, "unavailable"
// if device compatible but permissions not yet given, false
// if device compatible and permissions given, the read value

const useNfc = () => {
  const [allowed, setAllowed] = useState(false)
  const [signal, setSignal] = useState()
  const available = 'NDEFReader' in window
  const ndef = available && allowed && new window.NDEFReader()
  // if the signal is ready to receive but hasnt actually received a valid input yet
  const ready =
    allowed && ['unavailable', 'ready', undefined, false].includes(signal)

  useEffect(async () => {
    if (!available) {
      setSignal('unavailable')
      return
    } else if (!allowed) {
      setSignal(false)
      return
    }

    await ndef.scan()
    const onRead = ({message}) => {
      const decoder = new TextDecoder()
      setSignal(decoder.decode(message.records[0].data.buffer))
    }

    ndef.onreading = onRead
    if (ready) setSignal('ready')
  }, [allowed])

  return [signal, setAllowed, setSignal]
}

export default useNfc
