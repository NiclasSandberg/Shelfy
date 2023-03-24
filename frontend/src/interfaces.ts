export interface IProduct {
    id?: string;
    name: string;
    description: string;
    dateOpened: any;
    expiryDate: any;
    category: ICategory;
}

export interface ICategory {
    categoryId: number;
    categoryName?: string;
}