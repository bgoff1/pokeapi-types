import type { NamedAPIResource } from "../common/named-api-resource";
import type { VersionEncounterDetail } from "../common/version-encounter-detail";

export type LocationAreaEncounter = {
  /** The location area the referenced Pokémon can be encountered in. */
  location_area: NamedAPIResource;
  /** A list of versions and encounters with the referenced Pokémon that might happen. */
  version_details: VersionEncounterDetail[];
};
