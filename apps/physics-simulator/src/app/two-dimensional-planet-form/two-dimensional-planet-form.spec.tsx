import React from 'react';
import { render } from '@testing-library/react';

import TwoDimensionalPlanetForm from './two-dimensional-planet-form';

describe(' TwoDimensionalPlanetForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TwoDimensionalPlanetForm />);
    expect(baseElement).toBeTruthy();
  });
});
