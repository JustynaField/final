import React from 'react';
import { QuizCard } from '../QuizCard/QuizCard';
import './DisplayQuiz.css'

export const DisplayQuiz = ({quizzes}) => {

  if(!quizzes.length) {
    return (
      <div className='loading'>Loading</div>
    )
  } else {

    return (
      <section className='quiz'>
        <h2>{quizzes[0].quizzes[0].title}</h2>
        <QuizCard questions={quizzes[0].quizzes[0].questions} />
        <button className='submit-btn'>Submit</button>
      </section>
    )
  }
}
