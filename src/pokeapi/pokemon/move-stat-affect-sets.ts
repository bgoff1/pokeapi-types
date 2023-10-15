import { MoveStatAffect } from "./move-stat-affect";

export interface MoveStatAffectSets {
  /** A list of moves and how they change the referenced stat. */
  increase: MoveStatAffect[];
  /** A list of moves and how they change the referenced stat. */
  decrease: MoveStatAffect[];
}
