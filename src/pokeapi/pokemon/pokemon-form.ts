import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { PokemonFormSprites } from "./pokemon-form-sprites";
import { PokemonFormType } from "./pokemon-form-type";

export interface PokemonForm {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The order in which forms should be sorted within all forms. Multiple forms may have equal order, in which case they should fall back on sorting by name. */
  order: number;
  /** The order in which forms should be sorted within a species' forms. */
  form_order: number;
  /** True for exactly one form used as the default for each Pokémon. */
  is_default: boolean;
  /** Whether or not this form can only happen during battle. */
  is_battle_only: boolean;
  /** Whether or not this form requires mega evolution. */
  is_mega: boolean;
  /** The name of this form. */
  form_name: string;
  /** The Pokémon that can take on this form. */
  pokemon: NamedAPIResource;
  /** A list of details showing types this Pokémon form has. */
  types: PokemonFormType[];
  /** A set of sprites used to depict this Pokémon form in the game. */
  sprites: PokemonFormSprites;
  /** The version group this Pokémon form was introduced in. */
  version_group: NamedAPIResource;
  /** The form specific full name of this Pokémon form, or empty if the form does not have a specific name. */
  names: Name[];
  /** The form specific form name of this Pokémon form, or empty if the form does not have a specific name. */
  form_names: Name[];
}
