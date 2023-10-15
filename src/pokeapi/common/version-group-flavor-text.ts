import { NamedAPIResource } from "./named-api-resource";

export interface VersionGroupFlavorText {
  /** The localized name for an API resource in a specific language. */
  text: string;
  /** The language this name is in. */
  language: NamedAPIResource;
  /** The version group which uses this flavor text. */
  version_group: NamedAPIResource;
}
