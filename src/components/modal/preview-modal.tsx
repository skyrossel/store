'use client'

import usePreviewModal from '@/hooks/use-preview-moda'
import Modal from '@/components/ui/modal'
import { Tabs } from '@/components/ui/tabs'
import Gallery from '@/components/ui/gallery'
import Information from '@/components/ui/information'

const PreviewModal = () => {
  const { isOpen, onClose, product } = usePreviewModal()

  if (!product) {
    return null
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Tabs
        defaultValue={product.images?.[0].id}
        className="grid grid-cols-1 gap-x-6 px-6 md:grid-cols-2"
      >
        <Gallery images={product.images} />
        <Information product={product} products={[]} />
      </Tabs>
    </Modal>
  )
}

export default PreviewModal
