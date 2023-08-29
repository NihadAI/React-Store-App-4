import React from 'react';
import renderer from 'react-test-renderer';
import Favorite from './Favorite';

it('renders correctly', () => {
    const tree = renderer.create(<Favorite favoriteCount={5} />).toJSON();
    expect(tree).toMatchSnapshot();
});
