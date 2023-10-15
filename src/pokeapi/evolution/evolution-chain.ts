import { ChainLink } from "./chain-link";
import { NamedAPIResource } from "../common/named-api-resource";

export interface EvolutionChain {
  /** The identifier for this resource. */
  id: number;
  /** The item that a Pokémon would be holding when mating that would trigger the egg hatching a baby Pokémon rather than a basic Pokémon. */
  baby_trigger_item: NamedAPIResource;
  /** The base chain link object. Each link contains evolution details for a Pokémon in the chain. Each link references the next Pokémon in the natural evolution order. */
  chain: ChainLink;
}
