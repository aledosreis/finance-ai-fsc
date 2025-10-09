import { pgTable, text, timestamp, numeric, pgEnum } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const transactionCategory = pgEnum("TransactionCategory", [
  "HOUSING",
  "TRANSPORTATION",
  "FOOD",
  "ENTERTAINMENT",
  "HEALTH",
  "UTILITY",
  "SALARY",
  "EDUCATION",
  "OTHER",
]);
export const transactionPaymentMethod = pgEnum("TransactionPaymentMethod", [
  "CREDIT_CARD",
  "DEBIT_CARD",
  "BANK_TRANSFER",
  "BANK_SLIP",
  "CASH",
  "PIX",
  "OTHER",
]);
export const transactionType = pgEnum("TransactionType", [
  "DEPOSIT",
  "EXPENSE",
  "INVESTMENT",
]);

export const transaction = pgTable("Transaction", {
  id: text().primaryKey().notNull(),
  name: text().notNull(),
  type: transactionType().notNull(),
  category: transactionCategory().notNull(),
  paymentMethod: transactionPaymentMethod().notNull(),
  date: timestamp({ precision: 3, mode: "string" }).notNull(),
  createdAt: timestamp({ precision: 3, mode: "string" })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp({ precision: 3, mode: "string" }).notNull(),
  userId: text().notNull(),
  amount: numeric({ precision: 10, scale: 2 }).notNull(),
});
