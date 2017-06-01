// export const addUser = () => {
//   return {
//     type: 'ADD_USER'
//   }
// }


export const receiveQuizzes = (quizzes) => {
  return {
    type: 'GET_QUIZZES',
    quizzes
  }
}
