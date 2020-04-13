import {
  TwoDimensionalOrbitSimState,
  TwoDimensionalPlanet
} from '@myware/api-interfaces';
import * as orbits from '@myware/orbits';
import React, { useEffect } from 'react';
import './two-dimensional-orbit-simulator.scss';

/* eslint-disable-next-line */
export interface TwoDimensionalOrbitSimulatorProps {
  simState: TwoDimensionalOrbitSimState;
}

export const TwoDimensionalOrbitSimulator = (
  props: TwoDimensionalOrbitSimulatorProps
) => {
  useEffect(() => {
    const { simState } = props;

    if (simState) {
      updateSimulation(simState);
    }
  }, [props.simState]);

  const updateSimulation = (simState: TwoDimensionalOrbitSimState) => {
    const canvas: HTMLCanvasElement = document.querySelector(
      '#twoDimensionalOrbitSim'
    );  

    const twoDimensionalContext = canvas.getContext('2d');

    if (twoDimensionalContext === null) {
      alert(
        'Unable to initialize. Your browser or machine may not support it.'
      );
      return;
    }

    simState.planets.forEach(planet => {
      drawCircle(twoDimensionalContext, planet);
    });
  };

  const startSimulation = () => {
    setInterval(() => {
      updateSimulation(orbits.tick(props.simState));
    }, 1000);
  };

  return props.simState ? (
    <div>
      <canvas
        hidden={!props.simState}
        width={props.simState.plane.width}
        height={props.simState.plane.height}
        id="twoDimensionalOrbitSim"
      ></canvas>
      <button hidden={!props.simState} onClick={startSimulation}>
        start
      </button>
      {JSON.stringify(props.simState)}
    </div>
  ) : null;
};

const drawCircle = (
  ctx: CanvasRenderingContext2D,
  planet: TwoDimensionalPlanet
) => {
  const { x, y } = planet.position;

  ctx.beginPath();
  ctx.arc(x, y, planet.radiusInMetres, 0, 2 * Math.PI);
  ctx.fill();
};

export default TwoDimensionalOrbitSimulator;
