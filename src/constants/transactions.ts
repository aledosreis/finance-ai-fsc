import {
  transactionCategoryValues,
  transactionPaymentMethodValues,
  transactionTypeValues,
} from "../db/types";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  CREDIT_CARD: "credit-card.svg",
  DEBIT_CARD: "debit-card.svg",
  BANK_TRANSFER: "bank-transfer.svg",
  BANK_SLIP: "bank-slip.svg",
  CASH: "money.svg",
  PIX: "pix.svg",
  OTHER: "other.svg",
};

export const TRANSACTION_CATEGORY_LABELS = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Utilidades",
};

export const TRANSACTION_PAYMENT_METHOD_LABELS = {
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
};

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: transactionTypeValues.EXPENSE,
    label: "Despesa",
  },
  {
    value: transactionTypeValues.DEPOSIT,
    label: "Depósito",
  },
  {
    value: transactionTypeValues.INVESTMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: transactionPaymentMethodValues.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[
        transactionPaymentMethodValues.BANK_TRANSFER
      ],
  },
  {
    value: transactionPaymentMethodValues.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[
        transactionPaymentMethodValues.BANK_SLIP
      ],
  },
  {
    value: transactionPaymentMethodValues.CASH,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[transactionPaymentMethodValues.CASH],
  },
  {
    value: transactionPaymentMethodValues.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[
        transactionPaymentMethodValues.CREDIT_CARD
      ],
  },
  {
    value: transactionPaymentMethodValues.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[
        transactionPaymentMethodValues.DEBIT_CARD
      ],
  },
  {
    value: transactionPaymentMethodValues.OTHER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[transactionPaymentMethodValues.OTHER],
  },
  {
    value: transactionPaymentMethodValues.PIX,
    label:
      TRANSACTION_PAYMENT_METHOD_LABELS[transactionPaymentMethodValues.PIX],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: transactionCategoryValues.EDUCATION,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.EDUCATION],
  },
  {
    value: transactionCategoryValues.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.ENTERTAINMENT],
  },
  {
    value: transactionCategoryValues.FOOD,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.FOOD],
  },
  {
    value: transactionCategoryValues.HEALTH,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.HEALTH],
  },
  {
    value: transactionCategoryValues.HOUSING,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.HOUSING],
  },
  {
    value: transactionCategoryValues.OTHER,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.OTHER],
  },
  {
    value: transactionCategoryValues.SALARY,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.SALARY],
  },
  {
    value: transactionCategoryValues.TRANSPORTATION,
    label:
      TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.TRANSPORTATION],
  },
  {
    value: transactionCategoryValues.UTILITY,
    label: TRANSACTION_CATEGORY_LABELS[transactionCategoryValues.UTILITY],
  },
];
