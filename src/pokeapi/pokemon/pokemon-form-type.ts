import { NamedAPIResource } from "../common/named-api-resource";

export interface PokemonFormType {
  /** The order the Pokémon's types are listed in. */
  slot: number;
  /** The type the referenced Form has. */
  type: NamedAPIResource;
}
