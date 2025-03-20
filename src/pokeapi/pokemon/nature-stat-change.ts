import type { NamedAPIResource } from "../common/named-api-resource";

export type NatureStatChange = {
  /** The amount of change. */
  max_change: number;
  /** The stat being affected. */
  pokeathlon_stat: NamedAPIResource;
};
