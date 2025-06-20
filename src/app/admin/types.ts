export type ProductFormFields = {
    name: string;
    description: string;
    price: number;
    offer_price: number;
    category_id: string;
    images: File | File[];
};
