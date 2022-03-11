export interface Player {
  name: string;
  id: number;
  score?: number;
}

export interface PlayerContextType {
  player: Player | undefined;
  players: Array<Player>;
  loading: boolean;
  error?: string;
  createPlayer: (name: string) => void;
  getPlayers: () => void;
  getCurrentPlayerData: (id: number) => void;
}
