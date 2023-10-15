import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface MoveAilment {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that cause this ailment. */
  moves: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
