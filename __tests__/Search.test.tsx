/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Search} from '../components/Search';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import {fireEvent, render, screen} from '@testing-library/react-native';

describe('check render', () => {
  let onPressMocked: (val: string) => void;

  beforeAll(() => {
    onPressMocked = jest.fn();
  });
  it('renders correctly', () => {
    render(<Search onPress={onPressMocked} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders correctly counter and button', () => {
    const page = render(<Search onPress={onPressMocked} />);
    expect(page.getByTestId('search-input')).toBeTruthy();
    expect(page.getByTestId('search-button')).toBeTruthy();
  });
});

describe('check search', () => {
  let onPressMocked: (val: string) => void;

  beforeAll(() => {
    onPressMocked = jest.fn();
  });
  it('renders correctly counter and button', () => {
    const page = render(<Search onPress={onPressMocked} />);
    const input = page.getByTestId('search-input');
    fireEvent.changeText(input, 'search lo que sea');
    const button = page.getByTestId('search-button');
    fireEvent.press(button);
    expect(onPressMocked).toHaveBeenCalledWith('search lo que sea');
  });
});
