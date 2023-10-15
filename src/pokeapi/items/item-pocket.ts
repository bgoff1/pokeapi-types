import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface ItemPocket {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of item categories that are relevant to this item pocket. */
  categories: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
}
