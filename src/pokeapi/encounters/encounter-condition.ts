import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface EncounterCondition {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of possible values for this encounter condition. */
  values: NamedAPIResource[];
}
