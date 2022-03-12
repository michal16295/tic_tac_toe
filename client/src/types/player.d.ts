export interface Player {
  name: string;
  id: string;
  score?: number;
  computerScore?: number;
  level?: number;
}

export interface PlayerContextType {
  player: Player | undefined;
  players: Array<Player>;
  loading: boolean;
  error?: string;
  createPlayer: (name: string, level: number) => void;
  getPlayers: () => void;
  getCurrentPlayerData: (id: string) => void;
  changeDifficulty: (id: string, level: number) => void;
}
