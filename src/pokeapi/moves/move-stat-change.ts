import { NamedAPIResource } from "../common/named-api-resource";

export interface MoveStatChange {
  /** The amount of change. */
  change: number;
  /** The stat being affected. */
  stat: NamedAPIResource;
}
