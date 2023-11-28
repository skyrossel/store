import Image from 'next/image'
import { Image as ImageType } from '@/types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface GalleryProps {
  images: ImageType[]
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <Tabs
      defaultValue={images?.[0].id}
      className="flex h-[calc(100vh-6.5rem)] flex-col-reverse justify-between gap-6 md:h-[calc(100vh-7.5rem)]"
    >
      <TabsList className="grid grid-cols-4 items-center justify-between gap-x-4 bg-background p-1">
        {images.map((image, index) => (
          <TabsTrigger
            key={index}
            value={image.id}
            className="relative flex aspect-square cursor-pointer items-center justify-center bg-background px-3 py-1 ring-offset-background transition-all focus-visible:ring-1 focus-visible:ring-zinc-600 focus-visible:ring-offset-2 disabled:pointer-events-none data-[state=active]:ring-1 data-[state=active]:ring-zinc-600 data-[state=active]:ring-offset-2"
          >
            <Image
              src={image.url}
              alt={(index + 1).toString()}
              fill
              className="object-contain"
            />
          </TabsTrigger>
        ))}
      </TabsList>
      {images.map((image, index) => (
        <TabsContent
          key={index}
          value={image.id}
          className="relative h-full w-full ring-offset-background focus-visible:ring-1 focus-visible:ring-zinc-600 focus-visible:ring-offset-2"
        >
          <Image
            src={image.url}
            alt={(index + 1).toString()}
            fill
            className="object-contain"
          />
        </TabsContent>
      ))}
    </Tabs>
  )
}

export default Gallery
