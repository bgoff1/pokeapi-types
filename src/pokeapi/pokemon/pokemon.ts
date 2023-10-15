import type { NamedAPIResource } from "../common/named-api-resource";
import type { PokemonAbility } from "./pokemon-ability";
import type { PokemonHeldItem } from "./pokemon-held-item";
import type { PokemonMove } from "./pokemon-move";
import type { PokemonSprites } from "./pokemon-sprites";
import type { PokemonStat } from "./pokemon-stat";
import type { PokemonType } from "./pokemon-type";
import type { PokemonTypePast } from "./pokemon-type-past";
import type { VersionGameIndex } from "../common/version-game-index";

export interface Pokemon {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The base experience gained for defeating this Pokémon. */
  base_experience: number;
  /** The height of this Pokémon in decimeters. */
  height: number;
  /** Set for exactly one Pokémon used as the default for each species. */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;
  /** The weight of this Pokémon in hectograms. */
  weight: number;
  /** A list of abilities this Pokémon could potentially have. */
  abilities: PokemonAbility[];
  /** A list of forms this Pokémon can take on. */
  forms: NamedAPIResource[];
  /** A list of game indices relevant to Pokémon item by generation. */
  game_indices: VersionGameIndex[];
  /** A list of items this Pokémon may be holding when encountered. */
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups. */
  moves: PokemonMove[];
  /** A list of details showing types this pokémon had in previous generations */
  past_types: PokemonTypePast[];
  /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites */
  sprites: PokemonSprites;
  /** The species this Pokémon belongs to. */
  species: NamedAPIResource;
  /** A list of base stat values for this Pokémon. */
  stats: PokemonStat[];
  /** A list of details showing types this Pokémon has. */
  types: PokemonType[];
}
