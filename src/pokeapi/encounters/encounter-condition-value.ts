import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface EncounterConditionValue {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The condition this encounter condition value pertains to. */
  condition: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
}
