import { Effect } from "../common/effect";
import { NamedAPIResource } from "../common/named-api-resource";

export interface ItemFlingEffect {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The result of this fling effect listed in different languages. */
  effect_entries: Effect[];
  /** A list of items that have this fling effect. */
  items: NamedAPIResource[];
}
