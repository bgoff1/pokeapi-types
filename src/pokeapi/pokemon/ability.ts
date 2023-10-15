import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { VerboseEffect } from "../common/verbose-effect";
import { AbilityEffectChange } from "./ability-effect-change";
import { AbilityFlavorText } from "./ability-flavor-text";
import { AbilityPokemon } from "./ability-pokemon";

export interface Ability {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** Whether or not this ability originated in the main series of the video games. */
  is_main_series: boolean;
  /** The generation this ability originated in. */
  generation: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** The effect of this ability listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The list of previous effects this ability has had across version groups. */
  effect_changes: AbilityEffectChange[];
  /** The flavor text of this ability listed in different languages. */
  flavor_text_entries: AbilityFlavorText[];
  /** A list of Pokémon that could potentially have this ability. */
  pokemon: AbilityPokemon[];
}
