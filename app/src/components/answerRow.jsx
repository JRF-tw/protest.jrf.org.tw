import React from 'react';
import QuestionRow from './questionRow';

class AnswerRow extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (<div className="answerRow">
        <div className="answer">
          {this.props.answer}
        </div>
        <div className="answerDetail" dangerouslySetInnerHTML={{__html: this.props.detail}} />
      </div>
    );
  }
}

export default AnswerRow;