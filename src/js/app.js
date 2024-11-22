import { GameSavingLoader } from "./gameSaving";

GameSavingLoader.load().then(
  (saving) => {
    return saving;
  },
  (error) => {
    throw new Error(error);
  }
);
