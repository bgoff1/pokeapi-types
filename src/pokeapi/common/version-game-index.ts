import type { NamedAPIResource } from "./named-api-resource";

export interface VersionGameIndex {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The version relevant to this game index. */
  version: NamedAPIResource;
}
