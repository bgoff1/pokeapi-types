import type { APIResource } from "./api-resource";

export type NamedAPIResource = APIResource & {
  /** The name of the referenced resource. */
  name: string;
};
