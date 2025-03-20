import type { Description } from "../common/description";
import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type MoveLearnMethod = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The description of this resource listed in different languages. */
  descriptions: Description[];
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of version groups where moves can be learned through this method. */
  version_groups: NamedAPIResource[];
};
