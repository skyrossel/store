import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { Product } from '@/types'

interface CartStore {
  products: Product[]
  addProduct: (product: Product) => void
  removeProduct: (id: string) => void
  removeAll: () => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      products: [],
      addProduct: (product: Product) => {
        const currentProduct = get().products
        const existingProduct = currentProduct.find(
          (item) => item.id === product.id,
        )

        if (existingProduct) {
          return
        }

        set({ products: [...get().products, product] })
      },
      removeProduct: (id: string) => {
        set({
          products: [...get().products.filter((product) => product.id !== id)],
        })
      },
      removeAll: () => set({ products: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)

export default useCart
