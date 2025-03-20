import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";
import type { AwesomeName } from "./awesome-name";

export type PokemonShape = {
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
};
