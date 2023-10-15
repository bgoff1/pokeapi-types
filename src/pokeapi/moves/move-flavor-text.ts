import { NamedAPIResource } from "../common/named-api-resource";

export interface MoveFlavorText {
  /** The localized flavor text for an api resource in a specific language. */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResource;
  /** The version group that uses this flavor text. */
  version_group: NamedAPIResource;
}
