
import React, {PropTypes} from 'react';

class AnswerRow extends React.Component {

  static propTypes = {
    answer: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired
  }

  constructor(props) {
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
