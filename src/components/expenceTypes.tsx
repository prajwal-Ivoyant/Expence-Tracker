export interface expenceListTypes {
    id: string;
    title: string;
    amount: number;
    category: 'Food' | 'Transport' | 'Entertainment' | 'Bills' | 'Shopping' | 'Rent-Emi' | 'Others';
    date: string;
}