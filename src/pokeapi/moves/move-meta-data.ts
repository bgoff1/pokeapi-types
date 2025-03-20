import type { NamedAPIResource } from "../common/named-api-resource";

export type MoveMetaData = {
  /** The status ailment this move inflicts on its target. */
  ailment: NamedAPIResource;
  /** The category of move this move falls under, e.g. damage or ailment. */
  category: NamedAPIResource;
  /** The minimum number of times this move hits. Null if it always only hits once. */
  min_hits: number;
  /** The maximum number of times this move hits. Null if it always only hits once. */
  max_hits: number;
  /** The minimum number of turns this move continues to take effect. Null if it always only lasts one turn. */
  min_turns: number;
  /** The maximum number of turns this move continues to take effect. Null if it always only lasts one turn. */
  max_turns: number;
  /** HP drain (if positive) or Recoil damage (if negative), in percent of damage done. */
  drain: number;
  /** The amount of hp gained by the attacking Pokemon, in percent of it's maximum HP. */
  healing: number;
  /** Critical hit rate bonus. */
  crit_rate: number;
  /** The likelihood this attack will cause an ailment. */
  ailment_chance: number;
  /** The likelihood this attack will cause the target Pokémon to flinch. */
  flinch_chance: number;
  /** The likelihood this attack will cause a stat change in the target Pokémon. */
  stat_chance: number;
};
