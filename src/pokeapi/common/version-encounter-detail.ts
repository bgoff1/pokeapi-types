import type { Encounter } from "./encounter";
import type { NamedAPIResource } from "./named-api-resource";

export type VersionEncounterDetail = {
  /** The game version this encounter happens in. */
  version: NamedAPIResource;
  /** The total percentage of all encounter potential. */
  max_chance: number;
  /** A list of encounters and their specifics. */
  encounter_details: Encounter[];
};
