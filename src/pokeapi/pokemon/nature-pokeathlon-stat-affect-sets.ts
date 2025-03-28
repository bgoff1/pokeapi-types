import type { NaturePokeathlonStatAffect } from "./nature-pokeathlon-stat-affect";

export type NaturePokeathlonStatAffectSets = {
  /** A list of natures and how they change the referenced Pokéathlon stat. */
  increase: NaturePokeathlonStatAffect[];
  /** A list of natures and how they change the referenced Pokéathlon stat. */
  decrease: NaturePokeathlonStatAffect[];
};
