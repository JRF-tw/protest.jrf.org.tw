import React from 'react';

class Result extends React.Component {

  constructor(props){
    super(props);
    this.showResult = this.showResult.bind(this);
  }

  showResult(){
    this.props.onResultClick(true);
  }

  render() {
    return (<button onClick={this.showResult} >看結果</button>);
  }
}

export default Result;
