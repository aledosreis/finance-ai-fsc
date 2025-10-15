"use server";

import { db } from "@/db";
import { DeleteTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { transaction } from "@/db/schema";
import { eq } from "drizzle-orm";

export const deleteTransaction = async ({
  transactionId,
}: DeleteTransactionSchema) => {
  await db.delete(transaction).where(eq(transaction.id, transactionId));

  revalidatePath("/transactions");
  revalidatePath("/");
};
