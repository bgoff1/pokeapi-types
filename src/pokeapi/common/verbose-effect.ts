import type { NamedAPIResource } from "./named-api-resource";

export type VerboseEffect = {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The localized effect text in brief. */
  short_effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource;
};
