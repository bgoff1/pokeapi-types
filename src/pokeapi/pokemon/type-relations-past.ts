import { NamedAPIResource } from "../common/named-api-resource";
import { TypeRelations } from "./type-relations";

export interface TypeRelationsPast {
  /** The last generation in which the referenced type had the listed damage relations */
  generation: NamedAPIResource;
  /** The damage relations the referenced type had up to and including the listed generation */
  damage_relations: TypeRelations;
}
