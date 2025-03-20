import type { FlavorText } from "../common/flavor-text";
import type { NamedAPIResource } from "../common/named-api-resource";

export type SuperContestEffect = {
  /** The identifier for this resource. */
  id: number;
  /** The level of appeal this super contest effect has. */
  appeal: number;
  /** The flavor text of this super contest effect listed in different languages. */
  flavor_text_entries: FlavorText[];
  /** A list of moves that have the effect when used in super contests. */
  moves: NamedAPIResource[];
};
