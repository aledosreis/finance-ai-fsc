import { TransactionCategory, TransactionType } from "@/db/types";

export type TransactionPercentagePerType = {
  [key in TransactionType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentOfTotal: number;
}
