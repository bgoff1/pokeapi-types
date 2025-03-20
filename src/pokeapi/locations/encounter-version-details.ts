import type { NamedAPIResource } from "../common/named-api-resource";

export type EncounterVersionDetails = {
  /** The chance of an encounter to occur. */
  rate: number;
  /** The version of the game in which the encounter can occur with the given chance. */
  version: NamedAPIResource;
};
