import { NamedAPIResource } from "../common/named-api-resource";

export interface PokemonSpeciesGender {
  /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
  rate: number;
  /** A Pokémon species that can be the referenced gender. */
  pokemon_species: NamedAPIResource;
}
