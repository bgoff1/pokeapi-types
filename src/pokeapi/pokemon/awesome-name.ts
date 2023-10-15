import { NamedAPIResource } from "../common/named-api-resource";

export interface AwesomeName {
  /** The localized "scientific" name for an API resource in a specific language. */
  awesome_name: string;
  /** The language this "scientific" name is in. */
  language: NamedAPIResource;
}
