
import React, {PropTypes} from 'react';

class AnswerRow extends React.Component {

  static propTypes = {
    answer: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false,
      className: 'answerRow'
    };
  }

  handleClick() {
    const {open} = this.state;
    if (open) {
      this.setState({
        open: false,
        className: 'answerRow'
      });
    } else {
      this.setState({
        open: true,
        className: 'answerRow open'
      });
    }
  }

  render() {
    console.log(this.state);
    const {answer, detail} = this.props;
    const {className} = this.state;
    return (<div className={className}>
        <button>toggle</button>
        <div className="answer" onClick={this.handleClick}>
          {answer}
        </div>
        <div className="answerDetail" dangerouslySetInnerHTML={{__html: detail}} />
      </div>
    );
  }
}

export default AnswerRow;
