export interface Player {
  name: string;
  id: string;
  score?: number;
  computerScore?: number;
}

export interface PlayerContextType {
  player: Player | undefined;
  players: Array<Player>;
  loading: boolean;
  error?: string;
  createPlayer: (name: string) => void;
  getPlayers: () => void;
  getCurrentPlayerData: (id: string) => void;
}
