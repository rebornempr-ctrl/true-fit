export interface Product {
  id: bigint;
  imageUrls: string[];
  name: string;
  createdAt: bigint;
  description: string;
  isActive: boolean;
  sizes: string[];
  updatedAt: bigint;
  category: string;
  colors: string[];
  price: bigint;
}

export interface CartItem {
  productId: bigint;
  name: string;
  price: bigint;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
  imageUrl: string;
}

export interface ContactSubmission {
  id: bigint;
  name: string;
  createdAt: bigint;
  email: string;
  message: string;
}

export interface CreateProductArgs {
  imageUrls: string[];
  name: string;
  description: string;
  sizes: string[];
  category: string;
  colors: string[];
  price: bigint;
}

export interface UpdateProductArgs {
  id: bigint;
  imageUrls: string[];
  name: string;
  description: string;
  sizes: string[];
  category: string;
  colors: string[];
  price: bigint;
}

export interface CreateContactArgs {
  name: string;
  email: string;
  message: string;
}
