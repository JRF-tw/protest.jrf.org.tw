import React, {PropTypes} from 'react';
import QuestionRow from './questionRow';

class QuestionTable extends React.Component {

  static propTypes = {
    questionData: PropTypes.array.isRequired,
    onQuestionChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {questionData, onQuestionChange} = this.props;
    const questions = questionData.map( (item) => {
      const onQuestionRowChange = (value) => {
        const arr = {};
        const score = item.score;
        arr[score] = value;
        return onQuestionChange(arr);
      };
      return (<QuestionRow onChange={onQuestionRowChange}
        question={item.question} key={item.score} score={item.score} />);
    });

    return (<div className="questionTable">
      {questions}
    </div>);
  }
}

export default QuestionTable;
