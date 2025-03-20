import type { ContestComboDetail } from "./contest-combo-detail";

export type ContestComboSets = {
  /** A detail of moves this move can be used before or after, granting additional appeal points in contests. */
  normal: ContestComboDetail;
  /** A detail of moves this move can be used before or after, granting additional appeal points in super contests. */
  super: ContestComboDetail;
};
