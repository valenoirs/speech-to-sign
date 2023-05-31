import { useState } from 'react'
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition'
import IStartButton from '../interfaces/IStartButton'

const StartButton = (props: IStartButton) => {
  const { listen, setListen } = props

  const startButtonHandler = () => {
    if (!listen) {
      SpeechRecognition.startListening({ continuous: true, language: 'id' })
      setListen(true)
    }
  }

  return (
    <div className="start-button">
      {listen ? (
        <button className="btn btn-disabled" onClick={startButtonHandler}>
          Mulai
        </button>
      ) : (
        <button className="btn btn-primary" onClick={startButtonHandler}>
          Mulai
        </button>
      )}
    </div>
  )
}

export default StartButton
