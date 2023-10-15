import { NamedAPIResource } from "../common/named-api-resource";
import { PokemonSpeciesGender } from "./pokemon-species-gender";

export interface Gender {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of Pokémon species that can be this gender and how likely it is that they will be. */
  pokemon_species_details: PokemonSpeciesGender[];
  /** A list of Pokémon species that required this gender in order for a Pokémon to evolve into them. */
  required_for_evolution: NamedAPIResource[];
}
