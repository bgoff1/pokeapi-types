import type { Name } from "../common/name";

export type EncounterMethod = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A good value for sorting. */
  order: number;
  /** The name of this resource listed in different languages. */
  names: Name[];
};
