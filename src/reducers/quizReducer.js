export const quizReducer = (state=[], action) => {
  switch (action.type) {
    case 'GET_QUIZZES':
    return [...state, action.quizzes]

    default: return state
  }
}
