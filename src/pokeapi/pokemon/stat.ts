import { APIResource } from "../common/api-resource";
import { Name } from "../common/name";
import { NamedAPIResource } from "../common/named-api-resource";
import { MoveStatAffectSets } from "./move-stat-affect-sets";
import { NatureStatAffectSets } from "./nature-stat-affect-sets";

export interface Stat {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** ID the games use for this stat. */
  game_index: number;
  /** Whether this stat only exists within a battle. */
  is_battle_only: boolean;
  /** A detail of moves which affect this stat positively or negatively. */
  affecting_moves: MoveStatAffectSets;
  /** A detail of natures which affect this stat positively or negatively. */
  affecting_natures: NatureStatAffectSets;
  /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat. */
  characteristics: APIResource[];
  /** The class of damage this stat is directly related to. */
  move_damage_class: NamedAPIResource;
  /** The name of this resource listed in different languages. */
  names: Name[];
}
