import React from 'react';
import { questionData, answerData, defaultScore } from '../data';
import { connect } from 'react-redux';
import { updateScore, showResult } from '../actions';
import QuestionTable from '../components/questionTable'
import Result from '../components/result'
import AnswerTable from '../components/answerTable'

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { dispatch, state, questionData, answerData } = this.props;
    // Injected by connect() call:
    if (state.showResult) {
      return (<div>
        <div className="questions">
          <h1>社運測測看</h1>
          <QuestionTable questionData={questionData} onQuestionChange={arr => dispatch(updateScore(arr))} />
          <Result onResultClick={bool => dispatch(showResult(bool))} />
        </div>
        <AnswerTable answerData={answerData} score={state.score} />
        </div>);
    } else {
      return (<div>
        <div className="questions">
          <h1>社運測測看</h1>
          <QuestionTable questionData={questionData} onQuestionChange={arr => dispatch(updateScore(arr))} />
          <Result onResultClick={bool => dispatch(showResult(bool))} />
        </div>
        </div>);
    }
  }
};

function select(state) {
  return {
    state: state,
    questionData: questionData,
    answerData: answerData
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
