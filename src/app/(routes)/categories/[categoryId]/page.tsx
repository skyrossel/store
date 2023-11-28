import { ChevronRight } from 'lucide-react'
import getCategory from '@/actions/get-category'
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes'
import getColors from '@/actions/get-colors'
import Container from '@/components/ui/container'
import Filter from '@/components/ui/filter'
import ProductCard from '@/components/ui/product-card'

export const revalidate = 0

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: { categoryId: string }
  searchParams: { sizeId: string[]; colorId: string[] }
}) {
  const category = await getCategory(params.categoryId)
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  })
  const sizes = await getSizes()
  const colors = await getColors()

  const formattedSizes = sizes.filter((size) => size.name === category.name)

  return (
    <Container className="pt-20 md:pt-24">
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col justify-between gap-y-2 border-b border-zinc-600 pb-4 sm:flex-row sm:items-center">
          <h2 className="inline-flex items-center text-lg font-semibold uppercase sm:text-xl sm:tracking-tight md:text-2xl lg:text-3xl">
            {category.billboardId === 'f6df046c-7479-4b17-b684-9fe16c411f20'
              ? 'Male'
              : 'Female'}
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8" />
            {category.name}
          </h2>
          <Filter sizes={formattedSizes} colors={colors} />
        </div>
        {products.length === 0 ? (
          <h3 className="text-base uppercase md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
            Products are coming...
          </h3>
        ) : (
          <div className="grid grid-cols-2 items-center gap-4 pb-4 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
      </div>
    </Container>
  )
}
