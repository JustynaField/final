import React, { Component } from 'react';
import './App.css';
import { DisplayQuiz } from '../DisplayQuiz/DisplayQuiz';
// import Users from '../../containers/Users'

class App extends Component {

  componentDidMount() {
    fetch('/quizzes')
    .then((res) => res.json())
    .then((obj) => {
      console.log(obj)
      this.props.receiveQuizzes(obj)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To Quizzer</h1>
        <DisplayQuiz quizzes={this.props.quizzes}/>
      </div>
    );
  }
}

export default App;
