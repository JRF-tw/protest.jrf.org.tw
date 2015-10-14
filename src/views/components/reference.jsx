import React, {PropTypes} from 'react';

class Reference extends React.Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {name, link} = this.props;
    return (<li><a href={link}>{name}</a></li>);
  }
}

export default Reference;
