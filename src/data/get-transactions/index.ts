import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";

export const getTransactions = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  return await db.query.transaction.findMany({
    where: (transaction, { eq }) => eq(transaction.userId, userId),
    orderBy: (transaction, { desc }) => [desc(transaction.date)],
  });
};
