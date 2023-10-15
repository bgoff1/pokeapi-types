import { NamedAPIResource } from "../common/named-api-resource";
import { VersionEncounterDetail } from "../common/version-encounter-detail";

export interface PokemonEncounter {
  /** The Pokémon being encountered. */
  pokemon: NamedAPIResource;
  /** A list of versions and encounters with Pokémon that might happen in the referenced location area. */
  version_details: VersionEncounterDetail[];
}
