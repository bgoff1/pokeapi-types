import { Encounter } from "./encounter";
import { NamedAPIResource } from "./named-api-resource";

export interface VersionEncounterDetail {
  /** The game version this encounter happens in. */
  version: NamedAPIResource;
  /** The total percentage of all encounter potential. */
  max_chance: number;
  /** A list of encounters and their specifics. */
  encounter_details: Encounter[];
}
