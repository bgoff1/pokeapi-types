import { NamedAPIResource } from "../common/named-api-resource";

export interface NaturePokeathlonStatAffect {
  /** The maximum amount of change to the referenced Pokéathlon stat. */
  max_change: number;
  /** The nature causing the change. */
  nature: NamedAPIResource;
}
