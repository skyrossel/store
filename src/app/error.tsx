'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col gap-y-4">
        <h3 className="text-base font-semibold uppercase md:text-lg lg:text-xl lg:tracking-tight xl:text-2xl">
          Something went wrong...
        </h3>
        <Button onClick={() => router.back()}>Back</Button>
      </div>
    </div>
  )
}
