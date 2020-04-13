import { TwoDimensionalPlanet, TwoDimensionalOrbitSimulation } from '@myware/api-interfaces';

  const getTwoDimensionalOrbitSimulation = (planets: TwoDimensionalPlanet[]): TwoDimensionalOrbitSimulation => {
    return {
      plane: {
        height: 1000,
        width: 1000,
      },
      planets
    }
  }

export {
  getTwoDimensionalOrbitSimulation
}
