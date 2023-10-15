import { Name } from "../common/name";
import { PalParkEncounterSpecies } from "./pal-park-encounter-species";

export interface PalParkArea {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of Pokémon encountered in thi pal park area along with details. */
  pokemon_encounters: PalParkEncounterSpecies[];
}
