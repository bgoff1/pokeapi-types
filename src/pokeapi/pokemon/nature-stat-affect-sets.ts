import type { NamedAPIResource } from "../common/named-api-resource";

export type NatureStatAffectSets = {
  /** A list of natures and how they change the referenced stat. */
  increase: NamedAPIResource[];
  /** A list of nature sand how they change the referenced stat. */
  decrease: NamedAPIResource[];
};
