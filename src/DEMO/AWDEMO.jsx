import React from 'react'
import './AWDEMO.css';
import Video1 from './Video/video1.mp4'
import Video2 from './Video/video2.mp4'
import Video3 from './Video/video3.mp4'
import Video4 from './Video/video4.mp4'
export const AWDEMO = () => {
  return (
    <div> <div className='Demomain'>
    <h1>Why we need Vote ?</h1>
     <div className='video'><video width="700" height="600" controls>
     <source src={Video1} type="video/mp4"/>
     </video>
       <div className='text'>
         <p>
         <li>Voting in a democracy is of utmost importance as it lets citizens choose their representatives in forming the government and reflects the true form of democracy.</li>
         </p>
       </div>
     </div>
     
     <h1>Importance of the vote.</h1>
     <div className='video'><video width="700" height="600" controls>
     <source src={Video2} type="video/mp4"/>
     </video>
       <div className='text'>
         <p>
         <li>Voting is important because is a right and a cornerstone of the democratic system. </li>
         <li>Voting is an essential form of collective political participation and is considered a staple of democracy.</li>
         </p>
       </div>
     </div>
   
     <h1>Our responsibility for vote </h1>
    <div className='video'><video width="700" height="600" controls>
     <source src={Video3} type="video/mp4"/>
     </video>
       <div className='text'>
         <p>
           <li>The Indian Constitution grants the right to vote to all citizens of India irrespective of their race, caste, religion, gender and colour.</li>
           <li>The Indian Constitution contains several sections that protect people’s right to vote.</li>
         </p>
       </div>
     </div>

     <h1>Voting awareness</h1>

    <div className='video'><video width="700" height="600" controls>
     <source src={Video4} type="video/mp4"/>
    </video>
    <div className='text'>
    <p>
     <li>voting awareness is to help people understand the importance of voting. Voting is an important way for voters to control their government.</li>
     <li>t is a method for citizens to express what they want from their leaders by raising awareness about voting.</li>
     </p>
   </div>
    </div>
    

 </div>
 </div>
  )
}
