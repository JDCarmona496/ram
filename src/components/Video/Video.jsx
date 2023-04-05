import React from 'react';
import ReactPlayer from 'react-player';
import '../Video/Video.css'
import { Container } from 'react-bootstrap';


const Video = () => {
  return (
    <>
    <Container>


      <div className="video-container container12">
          <ReactPlayer  url="https://www.youtube.com/watch?v=jSXLDH9sc94&ab_channel=enchufetv" />
      </div>
    </Container>
    </>
  )
}

export default Video