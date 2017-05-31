import React from 'react';
import { QuizCard } from '../QuizCard/QuizCard';

export const DisplayQuiz = ({quizzes}) => {

  if(!quizzes.length) {
    return (
      <div>Fetching Data</div>
    )
  } else {
    return (

      <section>
      <h2>{quizzes[0].quizzes[0].title}</h2>
      <QuizCard questions={quizzes[0].quizzes[0].questions} />

      </section>
    )
  }
}
