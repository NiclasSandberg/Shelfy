export interface IProduct {
    id?: string;
    name: string;
    description: string;
    dateOpened: any;
    expiryDate: any;
    periodAfterOpening: string;
    category: ICategory;
}

export interface ICategory {
    id: number;
    name?: string;
}