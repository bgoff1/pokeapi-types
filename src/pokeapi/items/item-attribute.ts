import { Description } from "../common/description";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface ItemAttribute {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of items that have this attribute. */
  items: NamedAPIResource[];
  /** The name of this item attribute listed in different languages. */
  names: Name[];
  /** The description of this item attribute listed in different languages. */
  descriptions: Description[];
}
