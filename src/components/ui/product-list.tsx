import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Product } from '@/types'
import { buttonVariants } from '@/components/ui/button'
import ProductCard from '@/components/ui/product-card'

interface ProductListProps {
  products: Product[]
  title: string
  href: string
}

const ProductList: React.FC<ProductListProps> = ({ products, title, href }) => {
  return (
    <div className="flex flex-col gap-y-4 pb-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold uppercase sm:text-xl sm:tracking-tight md:text-2xl lg:text-3xl">
          {title}
        </h2>
        <Link
          href={href}
          className={buttonVariants({ variant: 'link', className: 'pr-0' })}
        >
          See more
          <ChevronRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
      {products.length === 0 ? (
        <h3 className="text-base uppercase md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
          Products are coming...
        </h3>
      ) : (
        <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {products.splice(0, 4).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
