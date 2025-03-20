import type { Description } from "../common/description";
import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type ItemAttribute = {
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
};
