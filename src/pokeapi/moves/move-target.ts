import { Description } from "../common/description";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface MoveTarget {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
  /** A list of moves that that are directed at this target. */
  moves: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
