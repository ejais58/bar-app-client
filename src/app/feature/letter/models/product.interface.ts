import { Category } from "./category.interface";

export interface Product {
    _id: string;
    prod_name: string;
    prod_description: string;
    id_category: Category;
    id_client: string;
    prod_price: number;
    prod_is_active?: boolean;
    prod_fecha?: Date;
}