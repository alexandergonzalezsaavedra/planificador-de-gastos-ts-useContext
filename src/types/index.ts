export type Expense = {
  id: string;
  amount: number;
  expenseName: string;
  category: string;
  date: Value;
};

export type DraftExpens = Omit<Expense, "id">;

type ValuePiece = Date | null;

export type Value = ValuePiece | [ValuePiece, ValuePiece];

export type Category = {
  id: string;
  name: string;
  icon: string;
};
