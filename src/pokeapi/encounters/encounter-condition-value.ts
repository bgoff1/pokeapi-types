import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type EncounterConditionValue = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The condition this encounter condition value pertains to. */
  condition: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
};
