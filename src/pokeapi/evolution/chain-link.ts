import type { EvolutionDetail } from "./evolution-detail";
import type { NamedAPIResource } from "../common/named-api-resource";

export type ChainLink = {
  /** Whether or not this link is for a baby Pokémon. This would only ever be true on the base link. */
  is_baby: boolean;
  /** The Pokémon species at this point in the evolution chain. */
  species: NamedAPIResource;
  /** All details regarding the specific details of the referenced Pokémon species evolution. */
  evolution_details: EvolutionDetail[];
  /** A List of chain objects. */
  evolves_to: ChainLink[];
};
