import {contacts} from './data.js'
import React from 'react';
import List from './list.js';

console.log('contacts: ', contacts);

React.render(<List contacts={contacts} />, document.getElementById('contacts'));
