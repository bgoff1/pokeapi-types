import type { APIResource } from "./api-resource";

export interface NamedAPIResource extends APIResource {
  /** The name of the referenced resource. */
  name: string;
}
