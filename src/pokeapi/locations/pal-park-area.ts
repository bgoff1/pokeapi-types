import type { Name } from "../common/name";
import type { PalParkEncounterSpecies } from "./pal-park-encounter-species";

export type PalParkArea = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of Pokémon encountered in thi pal park area along with details. */
  pokemon_encounters: PalParkEncounterSpecies[];
};
