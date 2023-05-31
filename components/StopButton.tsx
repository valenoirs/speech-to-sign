import { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import IStopButton from '../interfaces/IStopButton'

const StopButton = (props: IStopButton) => {
  const { listen, setListen } = props

  const stopButtonHandler = () => {
    if (listen) {
      SpeechRecognition.stopListening()
      setListen(false)
    }
  }

  return (
    <div className="start-button">
      {listen ? (
        <button className="btn btn-secondary" onClick={stopButtonHandler}>
          Berhenti
        </button>
      ) : (
        <button className="btn btn-disabled" onClick={stopButtonHandler}>
          Berhenti
        </button>
      )}
    </div>
  )
}

export default StopButton
