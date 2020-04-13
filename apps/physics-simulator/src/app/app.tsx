import { TwoDimensionalOrbitSimulation, TwoDimensionalPlanet } from '@myware/api-interfaces';
import { getTwoDimensionalOrbitSimulation } from '@myware/orbits';
import React, { useEffect, useState } from 'react';
import TwoDimensionalPlanetForm from './two-dimensional-planet-form/two-dimensional-planet-form';

export const App = () => {
  const [orbitSimulation, setOrbitSimulation] = useState<
    Partial<TwoDimensionalOrbitSimulation>
  >({});

  const [planets, setPlanets] = useState<TwoDimensionalPlanet[]>([]);

  useEffect(() => {
    if (planets && planets.length) {
      setOrbitSimulation(getTwoDimensionalOrbitSimulation(planets));
    }
  }, [planets]);

  const addPlanet = (planet: TwoDimensionalPlanet) => {
    setPlanets([...planets, planet]);
  };

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to physics-simulator!</h1>
      </div>

      <TwoDimensionalPlanetForm onSubmit={addPlanet}></TwoDimensionalPlanetForm>

      <div>{JSON.stringify(orbitSimulation)}</div>
    </>
  );
};

export default App;
