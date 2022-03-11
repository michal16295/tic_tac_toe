export class Board {
  position = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
}

export interface StepRequest {
  id: number;
  i: number;
  j: number;
}

export enum Winner {
  none,
  player,
  computer,
  tie,
}

export interface StepResponse {
  i?: number;
  j?: number;
  winner: Winner;
}
