import type { NamedAPIResource } from "./named-api-resource";

export type Encounter = {
  /** The lowest level the Pokémon could be encountered at. */
  min_level: number;
  /** The highest level the Pokémon could be encountered at. */
  max_level: number;
  /** A list of condition values that must be in effect for this encounter to occur. */
  condition_values: NamedAPIResource[];
  /** Percent chance that this encounter will occur. */
  chance: number;
  /** The method by which this encounter happens. */
  method: NamedAPIResource;
};
