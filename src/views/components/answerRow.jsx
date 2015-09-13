
import React, {PropTypes} from 'react';
import classNames from 'classnames';

class AnswerRow extends React.Component {

  static propTypes = {
    answer: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      open: false
    };
  }

  handleClick() {
    const {open} = this.state;
    if (open) {
      this.setState({
        open: false
      });
    } else {
      this.setState({
        open: true
      });
    }
  }

  render() {
    console.log(this.state);
    const {answer, detail} = this.props;
    const classes = classNames({
      'answerRow': true,
      'accordion': true,
      'open': this.state.open
    });
    return (<div className={classes}>
        <div className="answer" onClick={this.handleClick}>
          <button className="toggle" onClick={this.handleClick}>{this.state.open ? '隱藏' : '顯示'}</button>
          {answer}
        </div>
        <div className="answerDetail" dangerouslySetInnerHTML={{__html: detail}} />
      </div>
    );
  }
}

export default AnswerRow;
