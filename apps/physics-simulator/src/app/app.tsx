import { TwoDimensionalOrbitSimState, TwoDimensionalPlanet } from '@myware/api-interfaces';
import React, { useEffect, useState } from 'react';
import TwoDimensionalPlanetForm from './two-dimensional-planet-form/two-dimensional-planet-form';
import TwoDimensionalOrbitSimulator from './two-dimensional-orbit-simulator/two-dimensional-orbit-simulator';

export const App = () => {
  const [orbitSimulation, setOrbitSimulation] = useState<
    TwoDimensionalOrbitSimState
  >(undefined);

  const [planets, setPlanets] = useState<TwoDimensionalPlanet[]>([]);

  useEffect(() => {
    if (planets && planets.length) {
      setOrbitSimulation({plane: {width: 400, height: 500}, planets});
    }
  }, [planets]);

  const addPlanet = (planet: TwoDimensionalPlanet) => {
    setPlanets([...planets, planet]);
  };

  return (
    <>

      <TwoDimensionalPlanetForm onSubmit={addPlanet}></TwoDimensionalPlanetForm>

      <TwoDimensionalOrbitSimulator simState={orbitSimulation}></TwoDimensionalOrbitSimulator>

    </>
  );
};

export default App;
