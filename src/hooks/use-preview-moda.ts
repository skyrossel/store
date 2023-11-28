import { create } from 'zustand'
import { Product } from '@/types'

interface ProductModalStore {
  product?: Product
  isOpen: boolean
  onOpen: (product: Product) => void
  onClose: () => void
}

const usePreviewModal = create<ProductModalStore>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product: Product) => set({ product: product, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default usePreviewModal
