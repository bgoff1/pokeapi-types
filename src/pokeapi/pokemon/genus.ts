import type { NamedAPIResource } from "../common/named-api-resource";

export type Genus = {
  /** The localized genus for the referenced Pokémon species */
  genus: string;
  /** The language this genus is in. */
  language: NamedAPIResource;
};
