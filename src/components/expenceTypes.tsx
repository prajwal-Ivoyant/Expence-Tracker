export interface expenceListTypes {
    id: string;
    title: string;
    type: 'income' | 'expense'
    amount: number;
    category: 'Food' | 'Transport' | 'Entertainment' | 'Bills' | 'Shopping' | 'Rent-Emi' | 'Others';
    date: string;
}