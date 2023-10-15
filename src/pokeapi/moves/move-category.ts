import { Description } from "../common/description";
import { NamedAPIResource } from "../common/named-api-resource";

export interface MoveCategory {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of moves that fall into this category. */
  moves: NamedAPIResource[];
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
}
