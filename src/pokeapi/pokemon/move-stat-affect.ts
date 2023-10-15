import { NamedAPIResource } from "../common/named-api-resource";

export interface MoveStatAffect {
  /** The maximum amount of change to the referenced stat. */
  change: number;
  /** The move causing the change. */
  move: NamedAPIResource;
}
