import type { PokemonSprites } from "./pokemon-sprites";

export type PokemonFormSprites = Pick<
  PokemonSprites,
  "front_default" | "front_shiny" | "back_default" | "back_shiny"
>;
