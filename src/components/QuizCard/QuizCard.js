import React from 'react';
import { Answers } from '../Answers/Answers'

export const QuizCard = ({questions}) => {
console.log('PROPS',questions)

  const question = questions.map((question, index) => {


    return(
      <div key={index}>
        <p>{question.title}</p>
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
