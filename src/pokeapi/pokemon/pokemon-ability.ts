import type { NamedAPIResource } from "../common/named-api-resource";

export interface PokemonAbility {
  /** Whether or not this is a hidden ability. */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pokémon species. */
  slot: number;
  /** The ability the Pokémon may have. */
  ability: NamedAPIResource;
}
