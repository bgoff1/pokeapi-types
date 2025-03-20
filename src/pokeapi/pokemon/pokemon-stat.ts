import type { NamedAPIResource } from "../common/named-api-resource";

export type PokemonStat = {
  /** The stat the Pokémon has. */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pokémon has in the stat. */
  effort: number;
  /** The base value of the stat. */
  base_stat: number;
};
