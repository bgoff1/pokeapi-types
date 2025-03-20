import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type Version = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** The version group this version belongs to. */
  version_group: NamedAPIResource;
};
