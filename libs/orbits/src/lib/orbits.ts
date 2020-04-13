import { TwoDimensionalOrbitSimState } from '@myware/api-interfaces';

const tick = (simState: TwoDimensionalOrbitSimState) => {
  return {
    ...simState,
    planets: simState.planets.map(planet => ({
      ...planet,
      position: {
        ...planet.position,
        x: planet.position.x + 5,
        y: planet.position.y + 5
      }
    }))
  };
};

export { tick };
