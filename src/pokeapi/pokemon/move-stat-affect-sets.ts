import type { MoveStatAffect } from "./move-stat-affect";

export type MoveStatAffectSets = {
  /** A list of moves and how they change the referenced stat. */
  increase: MoveStatAffect[];
  /** A list of moves and how they change the referenced stat. */
  decrease: MoveStatAffect[];
};
