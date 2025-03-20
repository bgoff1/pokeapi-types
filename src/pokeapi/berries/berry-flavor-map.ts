import type { NamedAPIResource } from "../common/named-api-resource";

export type BerryFlavorMap = {
  /** How powerful the referenced flavor is for this berry. */
  potency: number;
  /** The referenced berry flavor. */
  flavor: NamedAPIResource;
};
