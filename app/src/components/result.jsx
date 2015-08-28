import React from 'react';

class Result extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (<button onClick={this.props.clickHandler} >看結果</button>);
  }
}

export default Result;