import type { NamedAPIResource } from "./named-api-resource";

export type Description = {
  /** The localized description for an API resource in a specific language. */
  description: string;
  /** The language this name is in. */
  language: NamedAPIResource;
};
