import React from 'react';
import './Answers.css'

export const Answers = ({ans, id}) => {

  const answers = ans.map((answer, index) => {

    return(
      <div key={index}>
        <p className='answer'><input className='radio' type='radio' name={`radio${id}`}/>{answer.title}</p>
      </div>
    )
  })

  return(
    <div>
    {answers}
    </div>
  )
}
