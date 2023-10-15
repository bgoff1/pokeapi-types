import type { NamedAPIResource } from "./named-api-resource";

export interface Name {
  /**  The localized name for an API resource in a specific language. */
  name: string;
  /** The language this name is in. */
  language: NamedAPIResource;
}
