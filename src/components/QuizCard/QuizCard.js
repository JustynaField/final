import React from 'react';
import { Answers } from '../Answers/Answers';
import './QuizCard.css'

export const QuizCard = ({questions}) => {

  const question = questions.map((question, index) => {

    return(
      <div key={index}>
        <p className='question'>{question.title}</p>
        <Answers ans={question.answers} id={question.id}/>
      </div>
    )
  })

  return(
    <div>
      {question}
    </div>
  )
}
