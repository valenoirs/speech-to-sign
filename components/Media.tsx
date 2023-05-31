import React from 'react'
import IMedia from '../interfaces/IMedia'
import Image from 'next/image'
import ReactPlayer from 'react-player'

const Media = (props: IMedia) => {
  const { words } = props

  return (
    <div className="media-wrapper grid gap-4 grid-cols-3 justify-center">
      {words.map((word, index) => (
        <div className="media mt-6" key={index}>
          <p className="text-xl font-bold">{word}</p>
          <ReactPlayer
            url={`/assets/sibi/${word}.webm`}
            width="100%"
            height="100%"
            controls={false}
            playing={true}
            loop={true}
          />
          {/* <Image
            src={`/assets/${word}.jpg`}
            alt="Output Image"
            width={250}
            height={250}
          /> */}
        </div>
      ))}
    </div>
  )
}

export default Media
