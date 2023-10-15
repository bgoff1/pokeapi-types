import { NamedAPIResource } from "../common/named-api-resource";

export interface ContestComboDetail {
  /** A list of moves to use before this move. */
  use_before: NamedAPIResource[];
  /** A list of moves to use after this move. */
  use_after: NamedAPIResource[];
}
