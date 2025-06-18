export type ProductFormFields = {
    name: string;
    description: string;
    price: number;
    offer_price: number;
    category_id: number;
    images: File | File[];
};
