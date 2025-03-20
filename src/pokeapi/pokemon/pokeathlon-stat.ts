import type { Name } from "../common/name";
import type { NaturePokeathlonStatAffectSets } from "./nature-pokeathlon-stat-affect-sets";

export type PokeathlonStat = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A detail of natures which affect this Pokéathlon stat positively or negatively. */
  affecting_natures: NaturePokeathlonStatAffectSets;
};
