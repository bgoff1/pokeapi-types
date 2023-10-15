import { Description } from "../common/description";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { PokemonEntry } from "./pokemon-entry";

export interface Pokedex {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Whether or not this Pokédex originated in the main series of the video games. */
  is_main_series: boolean;
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of Pokémon catalogued in this Pokédex and their indexes. */
  pokemon_entries: PokemonEntry[];
  /** The region this Pokédex catalogues Pokémon for. */
  region: NamedAPIResource;
  /** A list of version groups this Pokédex is relevant to. */
  version_groups: NamedAPIResource[];
}
