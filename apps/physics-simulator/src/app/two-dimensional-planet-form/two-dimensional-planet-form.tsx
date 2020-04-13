import { TwoDimensionalPlanet } from '@myware/api-interfaces';
import React, { ChangeEvent, useState } from 'react';
import './two-dimensional-planet-form.scss';

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

/* eslint-disable-next-line */
export interface TwoDimensionalPlanetFormProps {
  onSubmit: (planet: TwoDimensionalPlanet) => any;
}

export const TwoDimensionalPlanetForm = (
  props: TwoDimensionalPlanetFormProps
) => {
  const name = useFormInput('planet1');
  const massInKg = useFormInput('500');
  const radiusInMetres = useFormInput('100');
  const xCoordinate = useFormInput('100');
  const yCoordinate = useFormInput('200');

  const submit = () => {
    if (name.value && massInKg.value && radiusInMetres.value && xCoordinate.value && yCoordinate.value) {
      props.onSubmit({
        name: name.value,
        massInKg: parseInt(massInKg.value),
        radiusInMetres: parseInt(radiusInMetres.value),
        position: {
          x: parseInt(xCoordinate.value),
          y: parseInt(yCoordinate.value),
        }
      });
    }
  };

  return (
    <>
      <input type="text" placeholder="name" {...name}></input>
      <input type="number" placeholder="mass in kg" {...massInKg}></input>
      <input type="number" placeholder="radius in metres" {...radiusInMetres}></input>
      <input type="number" placeholder="x coord" {...xCoordinate}></input>
      <input type="number" placeholder="y coord" {...yCoordinate}></input>
      <button onClick={submit}>Add planet</button>
    </>
  );
};

export default TwoDimensionalPlanetForm;
