import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface Generation {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of abilities that were introduced in this generation. */
  abilities: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** The main region traveled in this generation. */
  main_region: NamedAPIResource;
  /** A list of moves that were introduced in this generation. */
  moves: NamedAPIResource[];
  /** A list of Pokémon species that were introduced in this generation. */
  pokemon_species: NamedAPIResource[];
  /** A list of types that were introduced in this generation. */
  types: NamedAPIResource[];
  /** A list of version groups that were introduced in this generation. */
  version_groups: NamedAPIResource[];
}
