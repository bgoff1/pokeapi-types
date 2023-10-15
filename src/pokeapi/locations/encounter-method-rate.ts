import { EncounterVersionDetails } from "./encounter-version-details";
import { NamedAPIResource } from "../common/named-api-resource";

export interface EncounterMethodRate {
  /** The method in which Pokémon may be encountered in an area.. */
  encounter_method: NamedAPIResource;
  /** The chance of the encounter to occur on a version of the game. */
  version_details: EncounterVersionDetails[];
}
