import {
  pgTable,
  text,
  timestamp,
  numeric,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";

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

export const transaction = pgTable("transaction", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  type: transactionType("type").notNull(),
  category: transactionCategory("category").notNull(),
  paymentMethod: transactionPaymentMethod("payment_method").notNull(),
  date: timestamp("date", { precision: 3 }).notNull(),
  createdAt: timestamp("created_at", { precision: 3 }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { precision: 3 })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
  userId: text("user_id").notNull(),
  amount: numeric("amount", { precision: 10, scale: 2 }).notNull(),
});
