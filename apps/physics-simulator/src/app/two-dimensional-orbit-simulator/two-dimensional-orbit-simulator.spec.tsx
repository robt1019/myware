import React from 'react';
import { render } from '@testing-library/react';

import TwoDimensionalOrbitSimulator from './two-dimensional-orbit-simulator';

describe(' TwoDimensionalOrbitSimulator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TwoDimensionalOrbitSimulator />);
    expect(baseElement).toBeTruthy();
  });
});
