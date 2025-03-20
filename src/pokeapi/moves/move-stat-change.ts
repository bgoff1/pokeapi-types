import type { NamedAPIResource } from "../common/named-api-resource";

export type MoveStatChange = {
  /** The amount of change. */
  change: number;
  /** The stat being affected. */
  stat: NamedAPIResource;
};
