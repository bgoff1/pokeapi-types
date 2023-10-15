import { Effect } from "../common/effect";
import { NamedAPIResource } from "../common/named-api-resource";

export interface AbilityEffectChange {
  /** The previous effect of this ability listed in different languages. */
  effect_entries: Effect[];
  /** The version group in which the previous effect of this ability originated. */
  version_group: NamedAPIResource;
}
