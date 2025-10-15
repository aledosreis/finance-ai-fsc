import { z } from "zod";
import {
  transaction,
  transactionCategory,
  transactionPaymentMethod,
  transactionType,
} from "./schema";

export type Transaction = typeof transaction.$inferSelect;

const transactionCategoryEnum = z.enum(transactionCategory.enumValues);
export const transactionCategoryValues = transactionCategoryEnum.Values;
export type TransactionCategory = typeof transactionCategoryEnum._type;

const transactionPaymentMethodEnum = z.enum(
  transactionPaymentMethod.enumValues,
);
export const transactionPaymentMethodValues =
  transactionPaymentMethodEnum.Values;
export type TransactionPaymentMethod =
  typeof transactionPaymentMethodEnum._type;

const transactionTypeEnum = z.enum(transactionType.enumValues);
export const transactionTypeValues = transactionTypeEnum.Values;
export type TransactionType = typeof transactionTypeEnum._type;
