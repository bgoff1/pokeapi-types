import type { BerryFlavorMap } from "./berry-flavor-map";
import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type BerryFlavor = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of the berries with this flavor. */
  berries: BerryFlavorMap[];
  /** The contest type that correlates with this berry flavor. */
  contest_type: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
};
