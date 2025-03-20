import type { NamedAPIResource } from "../common/named-api-resource";

export type PokemonMoveVersion = {
  /** The method by which the move is learned. */
  move_learn_method: NamedAPIResource;
  /** The version group in which the move is learned. */
  version_group: NamedAPIResource;
  /** The minimum level to learn the move. */
  level_learned_at: number;
};
