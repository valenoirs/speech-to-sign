import ITranscript from '../interfaces/ITranscript'

const Transcript = (props: ITranscript) => {
  const { transcript } = props

  return (
    <div className="transcript-wrapper mt-6">
      <p>{transcript}</p>
    </div>
  )
}

export default Transcript
