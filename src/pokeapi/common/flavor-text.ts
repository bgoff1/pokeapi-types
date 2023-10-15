import type { NamedAPIResource } from "./named-api-resource";

export interface FlavorText {
  /** The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files. This means that it contains special characters that one might want to replace with their visible decodable version. Please check out this issue to find out more. */
  flavor_text: string;
  /** The language this name is in. */
  language: NamedAPIResource;
  /** The game version this flavor text is extracted from. */
  version: NamedAPIResource;
}
