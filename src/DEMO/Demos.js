import React from 'react'
import VideoFile from './This is Why We Vote.mp4';
 
const Demo = () => {
  return (
    <div>
        <center>
          <video width="700" height="600" controls>
            <source src={VideoFile} type="video/mp4"/>
          </video>
       </center>
       {/* Why we vote</p> */}
       

    </div>
  )
}

export default Demo