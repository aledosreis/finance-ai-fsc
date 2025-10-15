import {
  transactionCategoryValues,
  transactionPaymentMethodValues,
  transactionTypeValues,
} from "@/app/_lib/db/types";
import z from "zod";

export const upsertTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(transactionTypeValues),
  category: z.nativeEnum(transactionCategoryValues),
  paymentMethod: z.nativeEnum(transactionPaymentMethodValues),
  date: z.date(),
});
