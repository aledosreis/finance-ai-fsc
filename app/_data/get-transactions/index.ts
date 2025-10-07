import { db } from "@/app/_lib/prisma";

export const getTransactions = async (userId: string) => {
  return await db.transaction.findMany({
    where: {
      userId,
    },
    orderBy: {
      date: "desc",
    },
  });
};
