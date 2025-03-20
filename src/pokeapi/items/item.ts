import type { APIResource } from "../common/api-resource";
import type { GenerationGameIndex } from "../common/generation-game-index";
import type { ItemHolderPokemon } from "./item-holder-pokemon";
import type { ItemSprites } from "./item-sprites";
import type { MachineVersionDetail } from "../common/machine-version-detail";
import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";
import type { VerboseEffect } from "../common/verbose-effect";
import type { VersionGroupFlavorText } from "../common/version-group-flavor-text";

export type Item = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The price of this item in stores. */
  cost: number;
  /** The power of the move Fling when used with this item. */
  fling_power: number;
  /** The effect of the move Fling when used with this item. */
  fling_effect: NamedAPIResource;
  /** A list of attributes this item has. */
  attributes: NamedAPIResource[];
  /** The category of items this item falls into. */
  category: NamedAPIResource;
  /** The effect of this ability listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The flavor text of this ability listed in different languages. */
  flavor_text_entries: VersionGroupFlavorText[];
  /** A list of game indices relevant to this item by generation. */
  game_indices: GenerationGameIndex[];
  /** The name of this item listed in different languages. */
  names: Name[];
  /** A set of sprites used to depict this item in the game. */
  sprites: ItemSprites;
  /** A list of Pokémon that might be found in the wild holding this item. */
  held_by_pokemon: ItemHolderPokemon[];
  /** An evolution chain this item requires to produce a bay during mating. */
  baby_trigger_for: APIResource;
  /** A list of the machines related to this item. */
  machines: MachineVersionDetail[];
};
