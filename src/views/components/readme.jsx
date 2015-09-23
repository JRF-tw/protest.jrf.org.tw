import React, {PropTypes} from 'react';

class Readme extends React.Component {

  static propTypes = {
    readme: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {readme} = this.props;
    return (<div className="readme" dangerouslySetInnerHTML={{__html: readme}} />);
  }
}

export default Readme;
