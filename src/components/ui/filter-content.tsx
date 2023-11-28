'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import qs from 'query-string'
import { Color, Size } from '@/types'
import { cn } from '@/lib/utils'
import { Checkbox } from '@/components/ui/checkbox'

interface FilterContentProps {
  data: (Size | Color)[]
  name: string
  valueKey: string
}

const FilterContent: React.FC<FilterContentProps> = ({
  data,
  name,
  valueKey,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const selectedValues = searchParams.getAll(valueKey)

  const onChange = (id: string) => {
    const current = qs.parse(searchParams.toString())

    let updatedValues = [...selectedValues]

    if (selectedValues.includes(id)) {
      updatedValues = updatedValues.filter((value) => value !== id)
    } else {
      updatedValues.push(id)
    }

    const query = {
      ...current,
      [valueKey]: updatedValues.length > 0 ? updatedValues : undefined,
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    )

    router.push(url)
  }

  return (
    <div className="flex flex-col gap-y-4">
      {name === 'Size' ? (
        <>
          {data.length >= 1 && (
            <h3 className="border-b border-zinc-400 pb-4 text-sm font-medium uppercase tracking-tight text-primary-foreground">
              {name}
            </h3>
          )}
        </>
      ) : (
        <h3 className="border-b border-zinc-400 pb-4 text-sm font-medium uppercase tracking-tight text-primary-foreground">
          {name}
        </h3>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map((filter, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <Checkbox
              checked={selectedValues.includes(filter.id)}
              onCheckedChange={() => onChange(filter.id)}
            />
            <label
              className={cn(
                'text-xs font-normal uppercase text-transparent',
                selectedValues.includes(filter.id)
                  ? 'font-medium text-primary-foreground'
                  : 'text-muted-foreground',
              )}
            >
              {name === 'Size' ? <>{filter.value}</> : <>{filter.name}</>}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterContent
