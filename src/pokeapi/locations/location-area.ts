import { EncounterMethodRate } from "./encounter-method-rate";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { PokemonEncounter } from "./pokemon-encounter";

export interface LocationArea {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** A list of methods in which Pokémon may be encountered in this area and how likely the method will occur depending on the version of the game. */
  encounter_method_rates: EncounterMethodRate[];
  /** The region this location area can be found in. */
  location: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of Pokémon that can be encountered in this area along with version specific details about the encounter. */
  pokemon_encounters: PokemonEncounter[];
}
