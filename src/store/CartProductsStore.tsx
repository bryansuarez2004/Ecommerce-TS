import { create } from "zustand";
import { productInCart } from "../models/productInCart";
import { product } from "../models";
import { persist } from "zustand/middleware";

type CartProductState =  {
    productsInCart: productInCart[],
    addNewProductInCart : (value :productInCart) => void,
    getProductInCart: (value: product['id']) => productInCart | false,
    deleteProductInCart: (value: product['id']) => void
    resetCart: () =>void
}


export const useCartProductsStore = create<CartProductState>()(
  persist(
    (set, get) => ({
      productsInCart: [],
      addNewProductInCart: (newProduct) => set((state) => {
        const productExists = state.productsInCart.some(product => product.id === newProduct.id);

        if (productExists) {
          // Si el producto ya existe, reemplázalo
          return {
            productsInCart: state.productsInCart.map(product =>
              product.id === newProduct.id ? newProduct : product
            )
          };
        }

        // Si el producto no existe, agrégalo al carrito
        return {
          productsInCart: [...state.productsInCart, newProduct]
        };
      }),
      getProductInCart: (productId) => {
        // Obtener el estado actual con `get` y buscar el producto
        const state = get();
        const productFind = state.productsInCart.find((product) => product.id === productId);
        if (!productFind) return false;

        return productFind;
      },
      deleteProductInCart: (idProduct) => set((state) => {
        return {
          productsInCart: state.productsInCart.filter((product) => product.id !== idProduct)
        };
      }),
      resetCart: () =>
        set(() => ({
          productsInCart: [],
        })),
    }),
    {
      name: 'cartProductsStorage', // Nombre de la clave en localStorage
    }
  )
)
