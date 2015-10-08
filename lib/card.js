import React, {PropTypes} from 'react';

export default class Card  extends React.Component {
  static propTypes = {
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    age: PropTypes.number
  }
  render () {
    const {firstname, lastname, age} = this.props;
    const fullName = `${firstname} ${lastname}`
    return (
      <li>
        <h3>{fullName}</h3>
        {(age !== undefined)? <span className="age">age: {age}</span> : null}
      </li>
    );
  }
}
