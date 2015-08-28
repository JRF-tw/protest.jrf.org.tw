import React from 'react';
import AnswerRow from './answerRow';

class AnswerTable extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    var score = this.props.score;
    var answerData = this.props.answerData;
    var answers = answerData.map(function(item){
      console.log(item);
      if (item.calculate(score)) {
        return (<AnswerRow answer={item.answer} detail={item.detail} key={item.key} />);
      } else {
        return (<div key={item.key} ></div>);
      }
    });

    if (this.props.showResult) {
      return (<div className="answerTable">
        {answers}
      </div>);
    } else {
      return (<div></div>);
    }
  }
}

export default AnswerTable;