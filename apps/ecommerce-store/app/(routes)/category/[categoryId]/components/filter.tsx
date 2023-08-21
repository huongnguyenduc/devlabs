'use client';

import { Color, Size } from '@/lib/types';
import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';
import { Button } from '@devlabs/ui/src/core/button';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Filter
 * ------------------------------------------------------------------------------------------------------------------ */

const filterVariants = cva('mb-8');

type FilterVariantProps = VariantProps<typeof filterVariants> & {
  data: (Color | Size)[];
  name: string;
  valueKey: string;
};

export type FilterProps = FilterVariantProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof FilterVariantProps>;

export const Filter: FC<FilterProps> = ({
  className,
  data,
  name,
  valueKey,
  ...props
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const selectedValue = searchParams.get(valueKey);

  const onClick = (value: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: value,
    };

    if (current[valueKey] === value) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true },
    );

    router.push(url);
  };

  return (
    <div {...props} className={filterVariants({ className })}>
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data?.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              size="sm"
              variant={selectedValue === filter.id ? 'primary' : 'outline'}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
