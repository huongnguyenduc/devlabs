import {
  Column,
  ColumnDef,
  flexRender,
  Table as TableType,
} from '@tanstack/react-table';
import { cva, VariantProps } from 'class-variance-authority';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
  EyeOffIcon,
  SlidersHorizontalIcon,
} from 'lucide-react';
import pluralize from 'pluralize';
import {
  ButtonHTMLAttributes,
  ChangeEventHandler,
  HTMLAttributes,
  useId,
  useTransition,
} from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Input } from './input';
import { Label } from './label';
import {
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPortal,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from './select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

/* -----------------------------------------------------------------------------
 * Component: DataTableColumnHeader
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTableColumnHeaderProps<TData, TValue>
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  column: Column<TData, TValue>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableColumnHeader = <TData, TValue>({
  column,
  title,
}: DataTableColumnHeaderProps<TData, TValue>) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        className="data-state-open:bg-accent -ml-4"
        size="sm"
        variant="ghost"
        endIcon={
          column.getIsSorted() === 'desc'
            ? ArrowDownIcon
            : column.getIsSorted() === 'asc'
            ? ArrowUpIcon
            : ChevronsUpDownIcon
        }
      >
        {title}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent align="start" sideOffset={5}>
        <DropdownMenuItem onClick={() => column.toggleSorting(false)}>
          <ArrowUpIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          Ascending
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.toggleSorting(true)}>
          <ArrowDownIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          Descending
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => column.clearSorting()}>
          <CheckIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          None
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
          <EyeOffIcon className="text-muted-foreground/70 mr-2 h-3.5 w-3.5" />
          Hide column
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenu>
);

/* -----------------------------------------------------------------------------
 * Component: DataTableGoToPage
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export const dataTableGoToPageVariants = cva('flex items-center gap-2');

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTableGoToPageProps<TData>
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataTableGoToPageVariants> {
  table: TableType<TData>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableGoToPage = <TData,>({
  table,
  className,
  ...props
}: DataTableGoToPageProps<TData>) => {
  const id = useId();

  return (
    <div
      className={twMerge(dataTableGoToPageVariants({ className }))}
      {...props}
    >
      <Label className="text-sm" htmlFor={id}>
        Go to page
      </Label>
      <Input
        inline
        id={id}
        max={table.getPageCount()}
        min={1}
        size="sm"
        type="number"
        value={table.getState().pagination.pageIndex + 1}
        onChange={(event) =>
          table.setPageIndex(
            event.target.value ? Number(event.target.value) - 1 : 0,
          )
        }
      />
    </div>
  );
};

/* -----------------------------------------------------------------------------
 * Component: DataTableRowPerPage
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export const dataTableRowPerPageVariants = cva('flex items-center gap-2');

export interface DataTableRowPageProps<TData>
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataTableRowPerPageVariants> {
  table: TableType<TData>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableRowPerPage = <TData,>({
  table,
  className,
  ...props
}: DataTableRowPageProps<TData>) => {
  const id = useId();

  return (
    <div
      className={twMerge(dataTableRowPerPageVariants({ className }))}
      {...props}
    >
      <Label className="text-sm" htmlFor={id}>
        Rows per page
      </Label>
      <Select
        value={table.getState().pagination.pageSize.toString()}
        onValueChange={(value) => table.setPageSize(Number(value))}
      >
        <SelectTrigger aria-label="Rows per page" id={id} size="sm">
          <SelectValue placeholder="Show" />
          <SelectIcon>
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent position="popper" sideOffset={5}>
            <SelectScrollUpButton>
              <ChevronUpIcon className="h-4 w-4 opacity-50" />
            </SelectScrollUpButton>
            <SelectViewport>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={pageSize.toString()}>
                  <SelectItemText>{pageSize}</SelectItemText>
                  <SelectItemIndicator>
                    <CheckIcon className="h-4 w-4" />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectViewport>
            <SelectScrollDownButton>
              <ChevronDownIcon className="h-4 w-4 opacity-50" />
            </SelectScrollDownButton>
          </SelectContent>
        </SelectPortal>
      </Select>
    </div>
  );
};

/* -----------------------------------------------------------------------------
 * Component: DataTablePageCount
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export const dataTablePageCountVariants = cva('text-sm font-medium');

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTablePageCountProps<TData>
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof dataTablePageCountVariants> {
  table: TableType<TData>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTablePageCount = <TData,>({
  table,
  className,
  ...props
}: DataTablePageCountProps<TData>) => (
  <p className={twMerge(dataTablePageCountVariants({ className }))} {...props}>
    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
  </p>
);

/* -----------------------------------------------------------------------------
 * Component: DataTableSearch
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTableSearchProps<TData> {
  table: TableType<TData>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableSearch = <TData,>({
  table,
}: DataTableSearchProps<TData>) => {
  const [_isPending, startTransition] = useTransition();
  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    startTransition(() => {
      table.setGlobalFilter(value);
    });
  };

  return (
    <Input
      className="w-full max-w-sm"
      placeholder="Search all columns..."
      type="search"
      onChange={onChange}
    />
  );
};

/* -----------------------------------------------------------------------------
 * Component: DataTableViewOptions
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTableViewOptionsProps<TData> {
  table: TableType<TData>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableViewOptions = <TData,>({
  table,
}: DataTableViewOptionsProps<TData>) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button
        aria-label="Toggle columns"
        startIcon={SlidersHorizontalIcon}
        variant="outline"
      >
        View
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuPortal>
      <DropdownMenuContent align="end" sideOffset={5}>
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== 'undefined' && column.getCanHide(),
          )
          .map((column) => (
            <DropdownMenuCheckboxItem
              key={column.id}
              checked={column.getIsVisible()}
              className="capitalize"
              onCheckedChange={(value) => column.toggleVisibility(value)}
            >
              <DropdownMenuItemIndicator>
                <CheckIcon className="h-4 w-4" />
              </DropdownMenuItemIndicator>
              {column.id}
            </DropdownMenuCheckboxItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenu>
);

/* -----------------------------------------------------------------------------
 * Component: DataTableToolbar
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTableToolbarProps<TData> {
  table: TableType<TData>;
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableToolbar = <TData,>({
  table,
}: DataTableToolbarProps<TData>) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex grow items-center gap-2">
      <DataTableSearch table={table} />
    </div>

    <DataTableViewOptions table={table} />
  </div>
);

/* -----------------------------------------------------------------------------
 * Component: DataTablePageButtons
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export const dataTablePageButtonsVariants = cva('flex items-center gap-2');

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTablePageButtonsProps<TData>
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof dataTablePageButtonsVariants> {
  table: TableType<TData>;
}

export const DataTablePageButtons = <TData,>({
  table,
  className,
  ...props
}: DataTablePageButtonsProps<TData>) => (
  <div
    className={twMerge(dataTablePageButtonsVariants({ className }))}
    {...props}
  >
    <Button
      aria-label="First page"
      disabled={!table.getCanPreviousPage()}
      size="sm"
      startIcon={ChevronsLeftIcon}
      title="First page"
      variant="outline"
      onClick={() => table.setPageIndex(0)}
    />
    <Button
      aria-label="Previous page"
      disabled={!table.getCanPreviousPage()}
      size="sm"
      startIcon={ChevronLeftIcon}
      title="Previous page"
      variant="outline"
      onClick={() => table.previousPage()}
    />
    <Button
      aria-label="Next page"
      disabled={!table.getCanNextPage()}
      endIcon={ChevronRightIcon}
      size="sm"
      title="Next page"
      variant="outline"
      onClick={() => table.nextPage()}
    />
    <Button
      aria-label="Last page"
      disabled={!table.getCanNextPage()}
      endIcon={ChevronsRightIcon}
      size="sm"
      title="Last page"
      variant="outline"
      onClick={() => table.setPageIndex(table.getPageCount() - 1)}
    />
  </div>
);

/* -----------------------------------------------------------------------------
 * Component: DataTablePagination
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export const dataTablePaginationVariants = cva(
  'flex flex-wrap items-center justify-between gap-4',
);

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTablePaginationProps<TData>
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dataTablePaginationVariants> {
  table: TableType<TData>;
}

export const DataTablePagination = <TData,>({
  table,
  className,
  ...props
}: DataTablePaginationProps<TData>) => (
  <div
    className={twMerge(dataTablePaginationVariants({ className }))}
    {...props}
  >
    <div className="text-muted-foreground grow text-sm">
      {table.getFilteredSelectedRowModel().rows.length} of{' '}
      {pluralize('row', table.getFilteredRowModel().rows.length, true)}{' '}
      selected.
    </div>

    <div className="flex flex-wrap items-center gap-4">
      <DataTableRowPerPage table={table} />

      <DataTableGoToPage table={table} />

      <DataTablePageCount table={table} />

      <DataTablePageButtons table={table} />
    </div>
  </div>
);

/* -----------------------------------------------------------------------------
 * Component: DataTableContent
 * -------------------------------------------------------------------------- */

/**
 * @deprecated It will be removed in next major release.
 */
export type TableClassNames = {
  table?: string;
  header?: string;
  headerRow?: string;
  head?: string;
  body?: string;
  row?: string;
  cell?: string;
  emptyRow?: string;
  emptyCell?: string;
};

/**
 * @deprecated It will be removed in next major release.
 */
export interface DataTableContentProps<TData> {
  table: TableType<TData>;
  classNames: TableClassNames;
  columns: ColumnDef<TData>[];
}

/**
 * @deprecated It will be removed in next major release.
 */
export const DataTableContent = <TData,>({
  table,
  classNames = {},
  columns = [],
}: DataTableContentProps<TData>) => (
  <div className="rounded-md border">
    <Table className={classNames?.table}>
      <TableHeader className={classNames?.header}>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className={twMerge('hover:bg-transparent', classNames?.headerRow)}
          >
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id} className={twMerge(classNames?.head)}>
                {!header.isPlaceholder &&
                  flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody className={classNames?.body}>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              className={classNames?.row}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className={twMerge(classNames?.cell)}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow
            className={twMerge(
              'align-middle hover:bg-transparent',
              classNames?.emptyRow,
            )}
          >
            <TableCell
              className={twMerge('h-24 text-center', classNames?.emptyCell)}
              colSpan={columns.length}
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
);
