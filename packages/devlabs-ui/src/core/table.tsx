import { cva, VariantProps } from 'class-variance-authority';
import {
  forwardRef,
  HTMLAttributes,
  TableHTMLAttributes,
  TdHTMLAttributes,
  ThHTMLAttributes,
} from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Table
 * -------------------------------------------------------------------------- */

export const tableVariants = cva('w-full caption-bottom text-sm');

export type TableProps = TableHTMLAttributes<HTMLTableElement> &
  VariantProps<typeof tableVariants>;

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, forwardedRef) => (
    <div className="w-full overflow-auto">
      <table
        ref={forwardedRef}
        className={twMerge(tableVariants({ className }))}
        {...props}
      />
    </div>
  ),
);

Table.displayName = 'Table';

/* -----------------------------------------------------------------------------
 * Component: TableHeader
 * -------------------------------------------------------------------------- */

export const tableHeaderVariants = cva('[&_tr]:border-b');

export type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement> &
  VariantProps<typeof tableHeaderVariants>;

export const TableHeader = forwardRef<
  HTMLTableSectionElement,
  TableHeaderProps
>(({ className, ...props }, forwardedRef) => (
  <thead
    ref={forwardedRef}
    className={twMerge(tableHeaderVariants({ className }))}
    {...props}
  />
));

TableHeader.displayName = 'TableHeader';

/* -----------------------------------------------------------------------------
 * Component: TableBody
 * -------------------------------------------------------------------------- */

export const tableBodyVariants = cva('divide-y');

export type TableBodyProps = HTMLAttributes<HTMLTableSectionElement> &
  VariantProps<typeof tableBodyVariants>;

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, forwardedRef) => (
    <tbody
      ref={forwardedRef}
      className={twMerge(tableBodyVariants({ className }))}
      {...props}
    />
  ),
);

TableBody.displayName = 'TableBody';

/* -----------------------------------------------------------------------------
 * Component: TableFooter
 * -------------------------------------------------------------------------- */

export const tableFooterVariants = cva('[&_tr]:border-t');

export type TableFooterProps = HTMLAttributes<HTMLTableSectionElement> &
  VariantProps<typeof tableFooterVariants>;

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>(({ className, ...props }, forwardedRef) => (
  <tfoot
    ref={forwardedRef}
    className={twMerge(tableFooterVariants({ className }))}
    {...props}
  />
));

TableFooter.displayName = 'TableFooter';

/* -----------------------------------------------------------------------------
 * Component: TableHead
 * -------------------------------------------------------------------------- */

export const tableHeadVariants = cva(
  'text-muted-foreground h-12 px-4 text-left font-medium [&:has([role=checkbox])]:pr-0',
);

export type TableHeadProps = ThHTMLAttributes<HTMLTableCellElement> &
  VariantProps<typeof tableHeadVariants>;

export const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(
  ({ className, ...props }, forwardedRef) => (
    <th
      ref={forwardedRef}
      className={twMerge(tableHeadVariants({ className }))}
      {...props}
    />
  ),
);

TableHead.displayName = 'TableHead';

/* -----------------------------------------------------------------------------
 * Component: TableRow
 * -------------------------------------------------------------------------- */

export const tableRowVariants = cva([
  'group transition-colors',
  'data-state-selected:bg-muted',
  'hover:bg-muted/50',
  'empty:hidden',
]);

export type TableRowProps = HTMLAttributes<HTMLTableRowElement> &
  VariantProps<typeof tableRowVariants>;

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, forwardedRef) => (
    <tr
      ref={forwardedRef}
      className={twMerge(tableRowVariants({ className }))}
      {...props}
    />
  ),
);

TableRow.displayName = 'TableRow';

/* -----------------------------------------------------------------------------
 * Component: TableCell
 * -------------------------------------------------------------------------- */

export const tableCellVariants = cva(
  'px-4 py-2 text-left [&:has([role=checkbox])]:pr-0',
);

export type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> &
  VariantProps<typeof tableCellVariants>;

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, forwardedRef) => (
    <td
      ref={forwardedRef}
      className={twMerge(tableCellVariants({ className }))}
      {...props}
    />
  ),
);

TableCell.displayName = 'TableCell';

/* -----------------------------------------------------------------------------
 * Component: TableCaption
 * -------------------------------------------------------------------------- */

export const tableCaptionVariants = cva('text-muted-foreground mt-4 text-sm');

export type TableCaptionProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof tableCaptionVariants>;

export const TableCaption = forwardRef<HTMLElement, TableCaptionProps>(
  ({ className, ...props }, forwardedRef) => (
    <caption
      ref={forwardedRef}
      className={twMerge(tableCaptionVariants({ className }))}
      {...props}
    />
  ),
);

TableCaption.displayName = 'TableCaption';
