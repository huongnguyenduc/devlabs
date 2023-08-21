'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { FC, HTMLAttributes } from 'react';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

/* ---------------------------------------------------------------------------------------------------------------------
 * Component: Overview
 * ------------------------------------------------------------------------------------------------------------------ */

const overviewVariants = cva('');

type OverviewVariantProps = VariantProps<typeof overviewVariants> & {
  data: any[];
};

export type OverviewProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  keyof OverviewVariantProps
> &
  OverviewVariantProps;

export const Overview: FC<OverviewProps> = ({ className, data, ...props }) => {
  return (
    <div {...props} className={overviewVariants({ className })}>
      <ResponsiveContainer height={350} width="100%">
        <BarChart data={data}>
          <XAxis
            axisLine={false}
            dataKey="name"
            fontSize={12}
            stroke="#888888"
            tickLine={false}
          />
          <YAxis
            axisLine={false}
            fontSize={12}
            stroke="#888888"
            tickFormatter={(value) => `${value}`}
            tickLine={false}
          />
          <Bar dataKey="total" fill="#3498db" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
