import type { NamedAPIResource } from "../common/named-api-resource";

export type ContestName = {
  /** The name for this contest. */
  name: string;
  /** The color associated with this contest's name. */
  color: string;
  /** The language that this name is in. */
  language: NamedAPIResource;
};
