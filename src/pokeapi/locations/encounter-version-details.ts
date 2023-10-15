import { NamedAPIResource } from "../common/named-api-resource";

export interface EncounterVersionDetails {
  /** The chance of an encounter to occur. */
  rate: number;
  /** The version of the game in which the encounter can occur with the given chance. */
  version: NamedAPIResource;
}
