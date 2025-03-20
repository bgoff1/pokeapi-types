import type { GenerationGameIndex } from "../common/generation-game-index";
import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";
import type { TypePokemon } from "./type-pokemon";
import type { TypeRelations } from "./type-relations";
import type { TypeRelationsPast } from "./type-relations-past";
import type { TypeSprite } from "./type-sprite";

export type Type = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** A detail of how effective this type is toward others and vice versa. */
  damage_relations: TypeRelations;
  /** A list of details of how effective this type was toward others and vice versa in previous generations */
  past_damage_relations: TypeRelationsPast[];
  /** A list of game indices relevant to this item by generation. */
  game_indices: GenerationGameIndex[];
  /** The generation this type was introduced in. */
  generation: NamedAPIResource;
  /** The class of damage inflicted by this type. */
  move_damage_class: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of details of Pokémon that have this type. */
  pokemon: TypePokemon[];
  /** A list of moves that have this type. */
  moves: NamedAPIResource[];
  /** A map of generation to the sprites for this type */
  sprites: Record<string, Record<string, TypeSprite>>;
};
