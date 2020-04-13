import { TwoDimensionalOrbitSimulation } from '@myware/api-interfaces';
import { getTwoDimensionalOrbitSimulation } from '@myware/orbits';
import React, { ChangeEvent, useEffect, useState } from 'react';

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
};

export const App = () => {

  const name = useFormInput('');
  const massInKg = useFormInput('');
  const radiusInMetres = useFormInput('');

  const [orbitSimulation, setOrbitSimulation] = useState<
    Partial<TwoDimensionalOrbitSimulation>
  >({});

  useEffect(() => {
    if (name.value && massInKg.value && radiusInMetres.value) {
      setOrbitSimulation(
        getTwoDimensionalOrbitSimulation([
          {
            name: name.value,
            massInKg: parseInt(massInKg.value),
            radiusInMetres: parseInt(radiusInMetres.value)
          }
        ])
      );
    }
  }, [name.value, massInKg.value, radiusInMetres.value]);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to physics-simulator!</h1>
      </div>
      <input {...name}></input>
      <input {...massInKg}></input>
      <input {...radiusInMetres}></input>
      <div>{JSON.stringify(orbitSimulation)}</div>
    </>
  );
};

export default App;
