import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface PokemonHabitat {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of the Pokémon species that can be found in this habitat. */
  pokemon_species: NamedAPIResource[];
}
