import { APIResource } from "./api-resource";
import { NamedAPIResource } from "./named-api-resource";

export interface MachineVersionDetail {
  /** The machine that teaches a move from an item. */
  machine: APIResource;
  /** The version group of this specific machine. */
  version_group: NamedAPIResource;
}
