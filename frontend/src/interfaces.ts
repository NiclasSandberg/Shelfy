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
    imageUrl?: string;
}

export interface IAuthContext {
    token: string | null;
    userMetadata: any;
}