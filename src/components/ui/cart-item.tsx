import Image from 'next/image'
import { X } from 'lucide-react'
import useCart from '@/hooks/use-cart'
import { formatter } from '@/lib/utils'
import { Product } from '@/types'
import IconButton from '@/components/ui/icon-button'

interface CartItemProps {
  product: Product
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  const cart = useCart()

  const onClick = () => {
    cart.removeProduct(product.id)
  }

  return (
    <li className="flex items-center gap-x-4 py-2 pr-2">
      <div className="relative h-24 w-32 overflow-hidden md:h-44 md:w-80">
        <Image
          src={product.images[0].url}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="absolute right-0 top-0">
          <IconButton icon={<X className="h-4 w-4" />} onClick={onClick} />
        </div>
        <div className="flex flex-col gap-y-1 text-center">
          <h6 className="inline-flex flex-wrap items-center justify-center gap-x-1 px-4 text-xs font-semibold uppercase leading-none sm:text-sm">
            {product.name}
            <span className="text-xs uppercase">
              {product.category.billboardId ===
              'f6df046c-7479-4b17-b684-9fe16c411f20'
                ? '( Male )'
                : '( Female )'}
            </span>
          </h6>
          <div className="flex justify-center gap-x-1">
            <span className="text-xs uppercase">Color / </span>
            <span className="text-xs uppercase">
              {product.colors?.[0].name}
            </span>
          </div>
          <div className="flex justify-center gap-x-1">
            <span className="text-xs uppercase">Size / </span>
            <span className="text-xs uppercase">
              {product.sizes?.[0].value}
            </span>
          </div>
          <div className="text-xs">
            {formatter.format(Number(product.price))}
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
