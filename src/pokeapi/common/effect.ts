import { NamedAPIResource } from "./named-api-resource";

export interface Effect {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;
  /** The language this effect is in. */
  language: NamedAPIResource;
}
