"use server";

import { auth } from "@clerk/nextjs/server";
import { upsertTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { transaction } from "@/db/schema";
import { eq } from "drizzle-orm";
import {
  TransactionCategory,
  TransactionType,
  TransactionPaymentMethod,
} from "@/db/types";

interface UpsertTransactionParams {
  id?: string;
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const upsertTransaction = async (params: UpsertTransactionParams) => {
  upsertTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }

  if (!params.id) {
    await db.insert(transaction).values({
      name: params.name,
      amount: params.amount.toString(),
      type: params.type,
      category: params.category,
      paymentMethod: params.paymentMethod,
      date: params.date,
      userId: userId,
    });
  } else {
    await db
      .update(transaction)
      .set({
        name: params.name,
        amount: params.amount.toString(),
        type: params.type,
        category: params.category,
        paymentMethod: params.paymentMethod,
        date: params.date,
      })
      .where(eq(transaction.id, params.id));
  }
  revalidatePath("/transactions");
};
