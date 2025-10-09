import { db } from "@/app/_lib/db";
import { auth } from "@clerk/nextjs/server";
import { endOfMonth, startOfMonth } from "date-fns";

export const getCurrentMonthTransactions = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  const monthTransactions = await db.query.transaction.findMany({
    where: (transaction, { eq, and, gte, lt }) =>
      and(
        eq(transaction.userId, userId),
        gte(transaction.createdAt, startOfMonth(new Date())),
        lt(transaction.createdAt, endOfMonth(new Date())),
      ),
  });

  return monthTransactions.length;
};
