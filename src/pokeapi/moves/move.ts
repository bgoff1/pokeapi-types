import { APIResource } from "../common/api-resource";
import { MachineVersionDetail } from "../common/machine-version-detail";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { AbilityEffectChange } from "../pokemon/ability-effect-change";
import { VerboseEffect } from "../common/verbose-effect";
import { ContestComboSets } from "./contest-combo-sets";
import { MoveFlavorText } from "./move-flavor-text";
import { MoveMetaData } from "./move-meta-data";
import { MoveStatChange } from "./move-stat-change";
import { PastMoveStatValues } from "./past-move-stat-values";

export interface Move {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The percent value of how likely this move is to be successful. */
  accuracy: number;
  /** The percent value of how likely it is this moves effect will happen. */
  effect_chance: number;
  /** Power points. The number of times this move can be used. */
  pp: number;
  /** A value between -8 and 8. Sets the order in which moves are executed during battle. See Bulbapedia for greater detail. */
  priority: number;
  /** The base power of this move with a value of 0 if it does not have a base power. */
  power: number;
  /** A detail of normal and super contest combos that require this move. */
  contest_combos: ContestComboSets;
  /** The type of appeal this move gives a Pokémon when used in a contest. */
  contest_type: NamedAPIResource;
  /** The effect the move has when used in a contest. */
  contest_effect: APIResource;
  /** The type of damage the move inflicts on the target, e.g. physical. */
  damage_class: NamedAPIResource;
  /** The effect of this move listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The list of previous effects this move has had across version groups of the games. */
  effect_changes: AbilityEffectChange[];
  /** List of Pokemon that can learn the move */
  learned_by_pokemon: NamedAPIResource[];
  /** The flavor text of this move listed in different languages. */
  flavor_text_entries: MoveFlavorText[];
  /** The generation in which this move was introduced. */
  generation: NamedAPIResource;
  /** A list of the machines that teach this move. */
  machines: MachineVersionDetail[];
  /** Metadata about this move */
  meta: MoveMetaData;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of move resource value changes across version groups of the game. */
  past_values: PastMoveStatValues[];
  /** A list of stats this moves effects and how much it effects them. */
  stat_changes: MoveStatChange[];
  /** The effect the move has when used in a super contest. */
  super_contest_effect: APIResource;
  /** The type of target that will receive the effects of the attack. */
  target: NamedAPIResource;
  /** The elemental type of this move. */
  type: NamedAPIResource;
}
