import React, {PropTypes} from 'react';

class Result extends React.Component {

  static propTypes = {
    onResultClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
  }

  showResult() {
    this.props.onResultClick(true);
  }

  render() {
    return (<button onClick={this.showResult} >檢察官可能會用哪些罪名起訴你？看看結果 »</button>);
  }
}

export default Result;
