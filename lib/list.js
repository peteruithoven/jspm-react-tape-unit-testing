import React, {PropTypes} from 'react';
import Card from './card.js';

export default class List extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
      age: PropTypes.number
    })).isRequired
  }
  render () {
    const {contacts} = this.props;
    return (
      <ul>
        {contacts.map((contact) => {
          return <Card {...contact} key={contact.id} />
        })}
      </ul>
    );
  }
}
