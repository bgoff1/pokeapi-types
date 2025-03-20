import type { Description } from "../common/description";
import type { NamedAPIResource } from "../common/named-api-resource";

export type Characteristic = {
  /** The identifier for this resource. */
  id: number;
  /** The remainder of the highest stat/IV divided by 5. */
  gene_modulo: number;
  /** The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5. */
  possible_values: number[];
  /** The stat which results in this characteristic. */
  highest_stat: NamedAPIResource;
  /** The descriptions of this characteristic listed in different languages. */
  descriptions: Description[];
};
