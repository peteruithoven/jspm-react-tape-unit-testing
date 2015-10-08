import test from 'tape';
import Test from 'legit-tests';
import React from 'react';
import List from '../lib/list.js';

const COMPONENT = 'List > ';

const defaultContacts = [
  {
		id: 'alex-smith',
		firstname: 'Alex',
		lastname: 'Smith',
		age: 29
	},
	{
		id: 'bob-brannon',
		firstname: 'Bob',
		lastname: 'Brannon',
		age: 35
	}
];

function setup(contacts=defaultContacts) {
  return {
    list: Test(<List contacts={contacts} />)
  };
}
test(COMPONENT, (assert) => {
	let {list} = setup();
	list.find('li')
	.element((itemElems) => {
		var actual = itemElems.length;
		var expected = defaultContacts.length;
		assert.equal(actual, expected, 'should generate complete list');
		assert.end();
	});
})
