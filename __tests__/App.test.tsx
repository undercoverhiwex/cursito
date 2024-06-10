/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('check render', () => {
  it('renders correctly', () => {
    render(<App />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders correctly counter and button', () => {
    const page = render(<App />);
    expect(page.getByTestId('counter-label')).toBeTruthy();
    expect(page.getByTestId('counter-button')).toBeTruthy();
  });
});

describe('check counter', () => {
  it('check correclty counter', () => {
    const page = render(<App />);
    const button = page.getByTestId('counter-button');
    fireEvent.press(button);
    expect(page.getByText('11')).toBeTruthy();
    fireEvent.press(button);
    expect(page.getByText('12')).toBeTruthy();
  });
});
