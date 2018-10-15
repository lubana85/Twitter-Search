import React from 'react';
import renderer from 'react-test-renderer';
import Tweet from './../components/Tweet';

test('Tweet displays the text', () => {

  const item = {
        text: 'Text ...',
        url: 'http://placehold.it/600/92c952',
    };
  const component = renderer.create(
    <Tweet {...item} />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
