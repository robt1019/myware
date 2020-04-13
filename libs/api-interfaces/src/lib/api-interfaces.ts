export interface Message {
  message: string;
}

export interface TwoDimensionalPosition {
  x: number;
  y: number;
}

export interface TwoDimensionalPlanet {
  name: string;
  massInKg: number;
  radiusInMetres: number;
  position: TwoDimensionalPosition;
}

export interface TwoDimensionalPlane {
  height: number;
  width: number;
}

export interface TwoDimensionalOrbitSimState {
  plane: TwoDimensionalPlane,
  planets: TwoDimensionalPlanet[]
}
