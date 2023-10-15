import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface ItemCategory {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of items that are a part of this category. */
  items: NamedAPIResource[];
  /** The name of this item category listed in different languages. */
  names: Name[];
  /** The pocket items in this category would be put in. */
  pocket: NamedAPIResource;
}
