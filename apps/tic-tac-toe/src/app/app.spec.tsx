import React from 'react';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should tic-tac-toe board', () => {
    const { baseElement } = render(<App />);

    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);

    expect(getByText('Next player: X')).toBeTruthy();
  });
});
