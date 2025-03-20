import type { NamedAPIResource } from "../common/named-api-resource";

export type MoveStatAffect = {
  /** The maximum amount of change to the referenced stat. */
  change: number;
  /** The move causing the change. */
  move: NamedAPIResource;
};
