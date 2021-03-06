import React, {PropTypes} from 'react';

class QuestionRow extends React.Component {

  static propTypes = {
    score: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.checked});
    this.props.onChange(event.target.checked);
  }

  render() {
    const {question, score} = this.props;
    const checkboxId = 'checkbox-' + score;
    return (
      <div className="questionRow">
        <input type="checkbox" id={checkboxId} defaultChecked={false} onChange={this.handleChange} />
        <label className="question" htmlFor={checkboxId}>
          {question}
        </label>
      </div>
    );
  }
}

export default QuestionRow;
