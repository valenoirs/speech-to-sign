import { useSpeechRecognition } from 'react-speech-recognition'

import IResetButton from '../interfaces/IResetButton'

const ResetButton = (props: IResetButton) => {
  const { reset, setWords } = props

  const { resetTranscript } = useSpeechRecognition()

  const resetButtonHandler = () => {
    setWords([])
    reset()
  }

  return (
    <div className="reset-button">
      <button className="btn btn-accent" onClick={resetButtonHandler}>
        Reset
      </button>
    </div>
  )
}

export default ResetButton
