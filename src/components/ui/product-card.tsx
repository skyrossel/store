'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler } from 'react'
import { Expand, ShoppingCart } from 'lucide-react'
import usePreviewModal from '@/hooks/use-preview-moda'
import useCart from '@/hooks/use-cart'
import { formatter } from '@/lib/utils'
import { Product } from '@/types'
import IconButton from '@/components/ui/icon-button'

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cart = useCart()
  const previewModal = usePreviewModal()

  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()

    cart.addProduct(product)
  }

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()

    previewModal.onOpen(product)
  }

  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex cursor-pointer flex-col gap-y-2"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images?.[0].url}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute right-2 top-2 flex h-full w-full items-start justify-end opacity-0 transition-opacity group-hover:opacity-100 sm:right-4 sm:top-4">
          <div className="flex flex-col gap-y-2">
            <IconButton
              icon={<ShoppingCart className="h-4 w-4" />}
              onClick={onClick}
            />
            <IconButton
              icon={<Expand className="h-4 w-4" />}
              onClick={onPreview}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-1 text-center">
        <h6 className="text-xs font-semibold uppercase leading-none sm:text-sm">
          {product.name}
        </h6>
        <div className="text-xs uppercase">
          {product.category.billboardId ===
          'f6df046c-7479-4b17-b684-9fe16c411f20'
            ? '( Male )'
            : '( Female )'}
        </div>
        <div className="text-xs">{formatter.format(Number(product.price))}</div>
      </div>
    </Link>
  )
}

export default ProductCard
