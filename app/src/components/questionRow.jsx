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
    return (
      <div className="questionRow">
        <input type="checkbox" defaultChecked={false} onChange={this.handleChange} />
        <div className="question">
          {this.props.question}
        </div>
      </div>
    );
  }
}

export default QuestionRow;
