import React from 'react' 
import { useState } from 'react'
import './text.css';

function Text(){
  const[selected,setSelected] = useState(null)

  const toggle = (i)=>{
      if(selected === i){
          return setSelected(null)
      }

      setSelected(i)
  }
    return (
      <div className='wrapper'>
      <div className='accordion'>
      {data.map((item, i)=>(
        <div className='item'>
            <div className='title' onClick={()=>toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected ===i ? '-' : '+'} </span> 

             </div>
          <div className={selected ===i ? 'content show' : 'content'}>{item.answer}</div>
        </div>
       ))}
       </div>
     </div>
);
}

 
  
const data = [
  {
    question: 'Why is we important to vote',
    answer:
    ' Voting is an important process in our country through which leaders are selected to make laws and solve problems.'

  },
  {
    question: 'how to vote?',
    answer:
      ' You can vote only if your name appears in the Voter List also known as Electoral Roll.'
  },
  {
    question: 'What are the benefits of voting?',
    answer:
      ' Voters tend to have stronger social connections,leading to greater quality of life and longevity.'
   }
]

export default Text 