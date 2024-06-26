interface Category {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: [string, string, string];
    creationAt: Date;
    updatedAt: Date;
    category: Category;
}

export interface Data {
    products: Product[];
}
