import { create } from "zustand";
import { product } from "../models";
import { productsDB } from "../bd";
import { productInCart } from "../models/productInCart";
import { persist } from 'zustand/middleware';

type ProductState =  {
   products: product[],
   updateProductStock: (id: product['id'], quantity: productInCart['quantity']) => void;
}


export const useProductsStore = create<ProductState>()(
    persist(
      (set) => ({
        products: productsDB, // Inicializar con los productos
        updateProductStock: (id, quantity) => {
          set((state) => ({
            products: state.products.map((product) =>
              product.id === id
                ? { ...product, stock: product.stock - quantity }
                : product
            ),
          }));
        },
      }),
      {
        name: 'productsStorage', // Clave para almacenamiento local
      
      }
    )
  );
