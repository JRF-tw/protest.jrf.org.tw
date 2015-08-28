import React from 'react';
import QuestionRow from './questionRow';

class QuestionTable extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var questionData = this.props.questionData;
    var sendValue = this.props.sendValue;
    var questions = questionData.map(function(item){
      var sendItemValue = function(value){
        return sendValue(item.score, value);
      };
      return <QuestionRow onChange={sendItemValue} question={item.question} key={item.score} />
    });

    return (<div className="questionTable">
      {questions}
    </div>);
  }
}

export default QuestionTable;