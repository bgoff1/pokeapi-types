import type { NamedAPIResource } from "../common/named-api-resource";
import type { VerboseEffect } from "../common/verbose-effect";

export type PastMoveStatValues = {
  /** The percent value of how likely this move is to be successful. */
  accuracy: number;
  /** The percent value of how likely it is this moves effect will take effect. */
  effect_chance: number;
  /** The base power of this move with a value of 0 if it does not have a base power. */
  power: number;
  /** Power points. The number of times this move can be used. */
  pp: number;
  /** The effect of this move listed in different languages. */
  effect_entries: VerboseEffect[];
  /** The elemental type of this move. */
  type: NamedAPIResource;
  /** The version group in which these move stat values were in effect. */
  version_group: NamedAPIResource;
};
