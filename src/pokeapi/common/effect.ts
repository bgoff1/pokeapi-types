import type { NamedAPIResource } from "./named-api-resource";

export type Effect = {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource;
};
