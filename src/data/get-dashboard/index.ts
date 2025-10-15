import { TotalExpensePerCategory, TransactionPercentagePerType } from "./types";
import { auth } from "@clerk/nextjs/server";
import { and, eq, gte, lt, sum } from "drizzle-orm";
import { transaction } from "@/db/schema";
import { db } from "@/db";
import { transactionTypeValues } from "@/db/types";

export const getDashboard = async (month: string) => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const depositsTotal =
    Number(
      (
        await db
          .select({ sum: sum(transaction.amount) })
          .from(transaction)
          .where(
            and(
              eq(transaction.userId, userId),
              gte(transaction.date, new Date(`2025-${month}-01`)),
              lt(transaction.date, new Date(`2025-${month}-31`)),
              eq(transaction.type, "DEPOSIT"),
            ),
          )
      )[0].sum,
    ) || 0;
  const investmentsTotal =
    Number(
      (
        await db
          .select({ sum: sum(transaction.amount) })
          .from(transaction)
          .where(
            and(
              eq(transaction.userId, userId),
              gte(transaction.date, new Date(`2025-${month}-01`)),
              lt(transaction.date, new Date(`2025-${month}-31`)),
              eq(transaction.type, "INVESTMENT"),
            ),
          )
      )[0].sum,
    ) || 0;
  const expensesTotal =
    Number(
      (
        await db
          .select({ sum: sum(transaction.amount) })
          .from(transaction)
          .where(
            and(
              eq(transaction.userId, userId),
              gte(transaction.date, new Date(`2025-${month}-01`)),
              lt(transaction.date, new Date(`2025-${month}-31`)),
              eq(transaction.type, "EXPENSE"),
            ),
          )
      )[0].sum,
    ) || 0;
  const balance = depositsTotal - investmentsTotal - expensesTotal;
  const transactionsTotal =
    Number(
      (
        await db
          .select({ sum: sum(transaction.amount) })
          .from(transaction)
          .where(
            and(
              eq(transaction.userId, userId),
              gte(transaction.date, new Date(`2025-${month}-01`)),
              lt(transaction.date, new Date(`2025-${month}-31`)),
            ),
          )
      )[0].sum,
    ) || 0;
  const typesPercentage: TransactionPercentagePerType = {
    [transactionTypeValues.DEPOSIT]:
      Math.round((depositsTotal / transactionsTotal) * 100) || 0,
    [transactionTypeValues.EXPENSE]:
      Math.round((expensesTotal / transactionsTotal) * 100) || 0,
    [transactionTypeValues.INVESTMENT]:
      Math.round((investmentsTotal / transactionsTotal) * 100) || 0,
  };

  const totalExpensePerCategory: TotalExpensePerCategory[] = (
    await db
      .select({
        category: transaction.category,
        sum: sum(transaction.amount),
      })
      .from(transaction)
      .where(
        and(
          eq(transaction.userId, userId),
          gte(transaction.date, new Date(`2025-${month}-01`)),
          lt(transaction.date, new Date(`2025-${month}-31`)),
          eq(transaction.type, "EXPENSE"),
        ),
      )
      .groupBy(transaction.category)
  ).map((category) => ({
    category: category.category,
    totalAmount: Number(category.sum) || 0,
    percentOfTotal: Math.round((Number(category.sum) / expensesTotal) * 100),
  }));

  const lastTransactions = await db.query.transaction.findMany({
    where: (transaction, { eq, and, gte, lt }) =>
      and(
        eq(transaction.userId, userId),
        gte(transaction.date, new Date(`2025-${month}-01`)),
        lt(transaction.date, new Date(`2025-${month}-31`)),
      ),
    orderBy: (transaction, { desc }) => [desc(transaction.date)],
    limit: 15,
  });

  return {
    depositsTotal,
    investmentsTotal,
    expensesTotal,
    balance,
    typesPercentage,
    totalExpensePerCategory,
    lastTransactions: JSON.parse(JSON.stringify(lastTransactions)),
  };
};
