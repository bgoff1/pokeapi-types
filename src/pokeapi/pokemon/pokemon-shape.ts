import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { AwesomeName } from "./awesome-name";

export interface PokemonShape {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The "scientific" name of this Pokémon shape listed in different languages. */
  awesome_names: AwesomeName[];
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of the Pokémon species that have this shape. */
  pokemon_species: NamedAPIResource[];
}
