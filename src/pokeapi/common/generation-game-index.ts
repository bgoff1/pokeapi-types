import { NamedAPIResource } from "./named-api-resource";

export interface GenerationGameIndex {
  /** The internal id of an API resource within game data. */
  game_index: number;
  /** The generation relevant to this game index. */
  generation: NamedAPIResource;
}
