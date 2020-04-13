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
  const name = useFormInput('');
  const massInKg = useFormInput('');
  const radiusInMetres = useFormInput('');

  const submit = () => {
    if (name.value && massInKg.value && radiusInMetres.value) {
      props.onSubmit({
        name: name.value,
        massInKg: parseInt(massInKg.value),
        radiusInMetres: parseInt(radiusInMetres.value)
      });
    }
  };

  return (
    <>
      <input {...name}></input>
      <input {...massInKg}></input>
      <input {...radiusInMetres}></input>
      <button onClick={submit}>Add planet</button>
    </>
  );
};

export default TwoDimensionalPlanetForm;
