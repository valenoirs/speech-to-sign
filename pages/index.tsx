import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import ReactPlayer from 'react-player'
import { useSpeechRecognition } from 'react-speech-recognition'

import StartButton from '../components/StartButton'
import ResetButton from '../components/ResetButton'
import StopButton from '../components/StopButton'
import Transcript from '../components/Transcript'
import Media from '../components/Media'

const Home: NextPage = () => {
  const { resetTranscript, transcript, interimTranscript } =
    useSpeechRecognition()
  const [keyword, setKeyword] = useState<string>('')
  const [words, setWords] = useState<string[]>([])
  const [sentence, setSentence] = useState<string>('')
  const [listen, setListen] = useState<boolean>(false)

  // useEffect(() => {
  //   if (interimTranscript) {
  //     setKeyword(interimTranscript)
  //     setWords(keyword.toLowerCase().split(' '))
  //   }
  // }, [interimTranscript, keyword])

  useEffect(() => {
    if (transcript) {
      setKeyword(transcript)
      setWords(keyword.toLowerCase().split(' '))
    }
  }, [transcript, keyword])

  return (
    <div className={styles.container}>
      <Head>
        <title>App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container `mx-auto center p-6">
          <div className="row-auto">
            <div className="mt-10 grid grid-cols-3 place-items-center">
              <StartButton listen={listen} setListen={setListen} />
              <StopButton listen={listen} setListen={setListen} />
              <ResetButton reset={resetTranscript} setWords={setWords} />
              <Transcript transcript={transcript} />
              {/* <div className="image-wrapper">
                {keyword ? (
                  // <ReactPlayer url={`/assets/${keyword}.webm`} width={250} height={250} controls={false} playing={true} loop={true}/>
                  // <Image src={`/assets/${keyword}.gif`} alt='Output Image' width={250} height={250}/>
                  <Image
                    src={`/assets/${keyword}.jpg`}
                    alt="Output Image"
                    width={250}
                    height={250}
                    />
                    ) : (
                      <></>
                )}
              </div> */}
            </div>
          </div>
        </div>
        <div className="container mx-auto center">
          <div className="row-auto">
            <div className="grid place-items-center">
              <Media words={words} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
