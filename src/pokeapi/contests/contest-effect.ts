import { Effect } from "../common/effect";
import { FlavorText } from "../common/flavor-text";

export interface ContestEffect {
  /** The identifier for this resource. */
  id: number;
  /** The base number of hearts the user of this move gets. */
  appeal: number;
  /** The base number of hearts the user's opponent loses. */
  jam: number;
  /** The result of this contest effect listed in different languages. */
  effect_entries: Effect[];
  /** The flavor text of this contest effect listed in different languages. */
  flavor_text_entries: FlavorText[];
}
