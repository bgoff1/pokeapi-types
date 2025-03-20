import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type MoveAilment = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that cause this ailment. */
  moves: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
};
