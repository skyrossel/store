'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import useCart from '@/hooks/use-cart'
import { cn, formatter } from '@/lib/utils'
import { Product } from '@/types'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

interface InformationProps {
  product: Product
  products: Product[]
}

const Information: React.FC<InformationProps> = ({ product, products }) => {
  const pathname = usePathname()

  const sizes = product.sizes
  const colors = product.colors

  const suggestedProducts = products.filter(
    (suggestedProduct) => suggestedProduct.name === product.name,
  )

  const cart = useCart()

  const onClick = () => {
    cart.addProduct(product)
  }

  return (
    <div className="flex flex-col justify-between gap-y-6 pt-6">
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-base font-semibold uppercase md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
              {product.name}
            </h3>
            <p className="text-sm uppercase text-muted-foreground">
              Quantity: {product.quantity}
            </p>
          </div>
          <div className="text-xs font-semibold md:text-base">
            {formatter.format(Number(product.price))}
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-y-2">
          <h5 className="text-sm font-semibold uppercase md:text-base">
            Color:
          </h5>
          <div className="flex items-center gap-x-4">
            {colors.map((color, index) => (
              <Link
                key={index}
                href={`/products/${product.id}`}
                className={cn(
                  'text-xs uppercase md:text-sm',
                  pathname === `/products/${product.id}`
                    ? 'underline'
                    : 'no-underline',
                )}
              >
                <span>{color.name}</span>
              </Link>
            ))}
            {suggestedProducts.map((suggestedProduct, index) => (
              <Link
                key={index}
                href={`/products/${suggestedProduct.id}`}
                className="text-xs uppercase md:text-sm"
              >
                {suggestedProduct.colors.map((suggestedProductColor, index) => (
                  <span key={index}>{suggestedProductColor.value}</span>
                ))}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <h5 className="text-sm font-semibold uppercase md:text-base">
            Size:
          </h5>
          <div className="flex items-center gap-x-4">
            {sizes.map((size, index) => (
              <div
                key={index}
                className="border-r pr-4 text-xs uppercase last:border-none md:text-sm"
              >
                {size.value}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Button onClick={onClick}>Add to cart</Button>
    </div>
  )
}

export default Information
