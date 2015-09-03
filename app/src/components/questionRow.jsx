import React from 'react';

class QuestionRow extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.checked});
    this.props.onChange(event.target.checked);
  }

  render() {
    var checkboxId = "checkbox-" + this.props.score;
    return (
      <div className="questionRow">
        <input type="checkbox" id={checkboxId} defaultChecked={false} onChange={this.handleChange} />
        <label className="question" htmlFor={checkboxId}>
          {this.props.question}
        </label>
      </div>
    );
  }
}

export default QuestionRow;
