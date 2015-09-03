import React from 'react';
import AnswerRow from './answerRow';

class AnswerTable extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var score = this.props.score;
    var answerData = this.props.answerData;
    var answersEmpty = true;
    var answers = answerData.map(function(item){
      if (item.calculate(score)) {
        answersEmpty = false;
        return (<AnswerRow answer={item.answer} detail={item.detail} key={item.key} />);
      } else {
        return null;
      }
    });
    if (!answersEmpty) {
      return (<div className="answers">
          <div className="answerTable">
            {answers}
          </div>
        </div>);
    } else {
      return null;
    }
  }
}

export default AnswerTable;
