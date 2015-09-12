import React, {PropTypes} from 'react';
import AnswerRow from './answerRow';

class AnswerTable extends React.Component {

  static propTypes = {
    score: PropTypes.object.isRequired,
    answerData: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {score, answerData} = this.props;
    let answersEmpty = true;
    let result = null;
    const answers = answerData.map( (item) => {
      let answerResult = null;
      if (item.calculate(score)) {
        answersEmpty = false;
        answerResult = (<AnswerRow answer={item.answer} detail={item.detail} key={item.key} />);
      }
      return answerResult;
    });

    if (!answersEmpty) {
      result = (<div className="answers" id="answers">
          <div className="answerTable">
            {answers}
          </div>
        </div>);
    }
    return result;
  }
}

export default AnswerTable;
