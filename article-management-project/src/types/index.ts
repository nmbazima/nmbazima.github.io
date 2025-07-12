export interface Article {
    id: string;
    title: string;
    content: string;
    categoryId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Category {
    id: string;
    name: string;
    description?: string;
}