import test from 'tape';
import Test from 'legit-tests';
import React from 'react';
import Card from '../lib/card.js';

const COMPONENT = 'Card > ';

const contact = {
  firstname: 'Alex',
  lastname: 'Smith',
  age: 29
}

function setup(cardData=contact) {
  return {
    card: Test(<Card {...cardData} />)
  };
}

test(COMPONENT+'header', (assert) => {
  let {card} = setup();
  card.find('h3')
  .element((h3) => {
    assert.notEqual(h3, null, 'should contain header');
    var actual = h3.innerHTML;
    var expected = `${contact.firstname} ${contact.lastname}`;
    assert.equal(actual, expected, 'should contain first and last name');
    assert.end();
  });
})

test(COMPONENT+'age field', (assert) => {
  let {card} = setup();
  card.find('.age')
  .element(function(ageElem) {
    assert.notEqual(ageElem, null, 'should contain age element');
    var actual = ageElem.textContent;
    var expected = `age: ${contact.age}`;
    assert.equal(actual, expected, 'should contain age');
    assert.end();
  });
})

test(COMPONENT+'age field when no age available', (assert) => {
  let {card} = setup({
                  firstname: 'Alex',
                  lastname: 'Smith',
                });
  card.find('.age')
  .element(function(ageElem) {
    var actual = ageElem.length;
    var expected = 0;
    assert.equal(actual, expected, 'should not show age when not available');
    assert.end();
  });
});
