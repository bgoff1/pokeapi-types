import type { APIResource } from "./api-resource";
import type { NamedAPIResource } from "./named-api-resource";

export type MachineVersionDetail = {
  /** The machine that teaches a move from an item. */
  machine: APIResource;
  /** The version group of this specific machine. */
  version_group: NamedAPIResource;
};
