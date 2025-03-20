import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type BerryFirmness = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A list of the berries with this firmness. */
  berries: NamedAPIResource[];
  /** The name of this resource listed in different languages. */
  names: Name[];
};
