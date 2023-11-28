import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Container from '@/components/ui/container'
import Gallery from '@/components/ui/gallery'
import Information from '@/components/ui/information'
import ProductList from '@/components/ui/product-list'

export const revalidate = 0

export default async function ProductPage({
  params,
}: {
  params: { productId: string }
}) {
  const product = await getProduct(params.productId)
  const products = await getProducts({
    categoryId: product.category.id,
  })

  const suggestedProducts = products.filter(
    (suggestedProduct) => suggestedProduct.id !== product.id,
  )

  return (
    <Container className="pt-20 md:pt-24">
      <div className="flex flex-col gap-y-6">
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-2">
          <Gallery images={product.images} />
          <Information product={product} products={suggestedProducts} />
        </div>
        {products.length >= 1 && (
          <ProductList
            products={suggestedProducts}
            title={
              suggestedProducts.length === 1
                ? 'Related Product'
                : 'Related Products'
            }
            href={`/categories/${product.category.id}`}
          />
        )}
      </div>
    </Container>
  )
}
