
export enum TransactionType {
    Expense = 0,
    Income = 1
}

export interface Transaction {
    _id: string;
    _userId: string;
    amount: number;
    _categoryId: string;
    notes: string;
    time: Date;
    _balanceId: string;
    createAt: Date;
}

export interface CreateExpense {
    amount: number;
    _categoryId: string;
    notes: string;
    time: Date;
    _balanceId: string;
}

