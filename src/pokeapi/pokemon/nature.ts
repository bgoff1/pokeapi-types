import type { Name } from "../common/name";
import type { NamedAPIResource } from "../common/named-api-resource";
import type { MoveBattleStylePreference } from "./move-battle-style-preference";
import type { NatureStatChange } from "./nature-stat-change";

export type Nature = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The stat decreased by 10% in Pokémon with this nature. */
  decreased_stat: NamedAPIResource;
  /** The stat increased by 10% in Pokémon with this nature. */
  increased_stat: NamedAPIResource;
  /** The flavor hated by Pokémon with this nature. */
  hates_flavor: NamedAPIResource;
  /** The flavor liked by Pokémon with this nature. */
  likes_flavor: NamedAPIResource;
  /** A list of Pokéathlon stats this nature effects and how much it effects them. */
  pokeathlon_stat_changes: NatureStatChange[];
  /** A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent. */
  move_battle_style_preferences: MoveBattleStylePreference[];
  /** The name of this resource listed in different languages. */
  names: Name[];
};
