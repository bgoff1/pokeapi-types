import type { NamedAPIResource } from "../common/named-api-resource";

export type Machine = {
  /** The identifier for this resource. */
  id: number;
  /** The TM or HM item that corresponds to this machine. */
  item: NamedAPIResource;
  /** The move that is taught by this machine. */
  move: NamedAPIResource;
  /** The version group that this machine applies to. */
  version_group: NamedAPIResource;
};
