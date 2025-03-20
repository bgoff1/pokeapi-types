import type { NamedAPIResource } from "../common/named-api-resource";

export type PalParkEncounterSpecies = {
  /** The base score given to the player when this Pokémon is caught during a pal park run. */
  base_score: number;
  /** The base rate for encountering this Pokémon in this pal park area. */
  rate: number;
  /** The Pokémon species being encountered. */
  pokemon_species: NamedAPIResource;
};
