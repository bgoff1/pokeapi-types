import { GenerationGameIndex } from "../common/generation-game-index";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";

export interface Location {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The region this location can be found in. */
  region: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of game indices relevent to this location by generation. */
  game_indices: GenerationGameIndex[];
  /** Areas that can be found within this location. */
  areas: NamedAPIResource[];
}
