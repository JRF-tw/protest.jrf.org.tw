import React from 'react';
import QuestionRow from './questionRow';

class QuestionTable extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var questionData = this.props.questionData;
    var onQuestionChange = this.props.onQuestionChange;
    var questions = questionData.map(function(item){
      var onQuestionRowChange = function(value){
        let arr = {};
        let score = item.score;
        arr[score] = value;
        return onQuestionChange(arr);
      };
      return <QuestionRow onChange={onQuestionRowChange} question={item.question} key={item.score} />
    });

    return (<div className="questionTable">
      {questions}
    </div>);
  }
}

export default QuestionTable;
