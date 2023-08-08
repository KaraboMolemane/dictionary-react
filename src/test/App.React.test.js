import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer
    .create(<App />)
    .toJSON();
    expect(tree).toMatchSnapshot();
    });

    test('the data is defined', () => {
        return fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/test/a38b9950-2c3e-446c-94bd-02c7c25cbf22').then(data => {
          expect(data).toBeDefined();
        });
      });