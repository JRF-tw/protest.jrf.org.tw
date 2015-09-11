
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
    const {answer, detail} = this.props;
    return (<div className="answerRow">
        <div className="answer">
          {answer}
        </div>
        <div className="answerDetail" dangerouslySetInnerHTML={{__html: detail}} />
      </div>
    );
  }
}

export default AnswerRow;
