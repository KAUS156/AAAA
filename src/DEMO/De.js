import React from 'react'
import VideoFile from './VOTE _ IMPORTANCES.mp4';
 
const De = () => {
  return (
    <div>
        <center>
          <video width="700" height="600" controls>
            <source src={VideoFile} type="video/mp4"/>
          </video>
       </center>
       {/* <p>VOTE _ IMPORTANCES</p> */}
       

    </div>
  )
}

export default De