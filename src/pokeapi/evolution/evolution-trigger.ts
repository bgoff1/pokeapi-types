import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type EvolutionTrigger = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of pokemon species that result from this evolution trigger. */
  pokemon_species: NamedAPIResource[];
};
