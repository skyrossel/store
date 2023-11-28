'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-base font-semibold uppercase md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
          Not Found
        </h3>
        <Button onClick={() => router.back()}>Back</Button>
      </div>
    </div>
  )
}
