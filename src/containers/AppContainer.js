import { connect } from 'react-redux';
import{ receiveQuizzes } from '../actions/index';
import App  from '../components/App/App';

const mapStateToProps = (state) => {
  return { quizzes: state.quizReducer }
}

const mapDispatchToProps = (dispatch) => {
  return { receiveQuizzes: (quizzes) => dispatch(receiveQuizzes(quizzes)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
