import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface UpdateProductArgs {
    id: ProductId;
    imageUrls: Array<string>;
    name: string;
    description: string;
    sizes: Array<string>;
    category: string;
    colors: Array<string>;
    price: bigint;
}
export type Timestamp = bigint;
export interface ContactSubmission {
    id: ContactId;
    name: string;
    createdAt: Timestamp;
    email: string;
    message: string;
}
export type ProductId = bigint;
export interface CreateProductArgs {
    imageUrls: Array<string>;
    name: string;
    description: string;
    sizes: Array<string>;
    category: string;
    colors: Array<string>;
    price: bigint;
}
export type ContactId = bigint;
export interface Product {
    id: ProductId;
    imageUrls: Array<string>;
    name: string;
    createdAt: Timestamp;
    description: string;
    isActive: boolean;
    sizes: Array<string>;
    updatedAt: Timestamp;
    category: string;
    colors: Array<string>;
    price: bigint;
}
export interface CreateContactArgs {
    name: string;
    email: string;
    message: string;
}
export interface backendInterface {
    addProduct(args: CreateProductArgs): Promise<Product>;
    deleteProduct(id: ProductId): Promise<boolean>;
    getActiveProducts(): Promise<Array<Product>>;
    getAdmin(): Promise<Principal>;
    getAllProducts(): Promise<Array<Product>>;
    getContactSubmissions(): Promise<Array<ContactSubmission>>;
    getProductById(id: ProductId): Promise<Product | null>;
    getProductsByCategory(category: string): Promise<Array<Product>>;
    initialize(): Promise<void>;
    submitContact(args: CreateContactArgs): Promise<ContactSubmission>;
    toggleProductActive(id: ProductId): Promise<Product | null>;
    updateProduct(args: UpdateProductArgs): Promise<Product | null>;
}
