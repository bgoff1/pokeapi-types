import type { ContestName } from "./contest-name";
import type { NamedAPIResource } from "../common/named-api-resource";

export type ContestType = {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: string;
  /** The berry flavor that correlates with this contest type. */
  berry_flavor: NamedAPIResource;
  /** The name of this contest type listed in different languages. */
  names: ContestName[];
};
