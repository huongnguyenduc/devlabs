import { cva, VariantProps } from 'class-variance-authority';
import {
  CommandEmpty as Empty,
  CommandGroup as Group,
  CommandInput as Input,
  CommandItem as Item,
  CommandList as List,
  CommandLoading as Loading,
  CommandRoot as Root,
  CommandSeparator as Separator,
} from 'cmdk';
import { SearchIcon } from 'lucide-react';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

/* -----------------------------------------------------------------------------
 * Component: Command
 * -------------------------------------------------------------------------- */

export const commandVariants = cva(
  'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden',
  {
    variants: {
      variant: {
        primary: 'rounded-lg border shadow-lg',
        dialog: 'rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type CommandProps = ComponentPropsWithoutRef<typeof Root> &
  VariantProps<typeof commandVariants>;

export const Command = forwardRef<ElementRef<typeof Root>, CommandProps>(
  ({ className, variant = 'primary', ...props }, forwardedRef) => (
    <Root
      ref={forwardedRef}
      className={twMerge(commandVariants({ className, variant }))}
      {...props}
    />
  ),
);

Command.displayName = Root.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandInput
 * -------------------------------------------------------------------------- */

export const commandInputVariants = cva([
  'h-11 w-full min-w-0 rounded-xl bg-transparent py-3 text-sm outline-none',
  'placeholder:text-muted-foreground',
  'disabled:cursor-not-allowed disabled:opacity-50',
]);

export type CommandInputProps = ComponentPropsWithoutRef<typeof Input> &
  VariantProps<typeof commandInputVariants>;

export const CommandInput = forwardRef<
  ElementRef<typeof Input>,
  CommandInputProps
>(({ className, ...props }, forwardedRef) => (
  <div className="flex items-center gap-2 border-b px-3">
    <SearchIcon className="h-5 w-5 shrink-0 opacity-50" />
    <Input
      ref={forwardedRef}
      className={twMerge(commandInputVariants({ className }))}
      {...props}
    />
  </div>
));

CommandInput.displayName = Input.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandList
 * -------------------------------------------------------------------------- */

export const commandListVariants = cva('overflow-y-auto overflow-x-hidden');

export type CommandListProps = ComponentPropsWithoutRef<typeof List> &
  VariantProps<typeof commandListVariants>;

export const CommandList = forwardRef<
  ElementRef<typeof List>,
  CommandListProps
>(({ className, ...props }, forwardedRef) => (
  <List
    ref={forwardedRef}
    className={twMerge(commandListVariants({ className }))}
    {...props}
  />
));

CommandList.displayName = List.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandLoading
 * -------------------------------------------------------------------------- */

export type CommandLoadingProps = ComponentPropsWithoutRef<typeof Loading>;

export const CommandLoading = forwardRef<
  ElementRef<typeof Loading>,
  CommandLoadingProps
>(({ ...props }, forwardedRef) => <Loading ref={forwardedRef} {...props} />);

CommandLoading.displayName = Loading.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandEmpty
 * -------------------------------------------------------------------------- */

export const commandEmptyVariants = cva('py-6 text-center text-sm');

export type CommandEmptyProps = ComponentPropsWithoutRef<typeof Empty> &
  VariantProps<typeof commandEmptyVariants>;

export const CommandEmpty = forwardRef<
  ElementRef<typeof Empty>,
  CommandEmptyProps
>(({ className, ...props }, forwardedRef) => (
  <Empty
    ref={forwardedRef}
    className={twMerge(commandEmptyVariants({ className }))}
    {...props}
  />
));

CommandEmpty.displayName = Empty.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandGroup
 * -------------------------------------------------------------------------- */

export const commandGroupVariants = cva([
  'overflow-hidden p-1',
  '[&_[cmdk-group-items]]:space-y-0.5',
  '[&_[cmdk-group-heading]]:text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-sm [&_[cmdk-group-heading]]:font-semibold',
]);

export type CommandGroupProps = ComponentPropsWithoutRef<typeof Group> &
  VariantProps<typeof commandGroupVariants>;

export const CommandGroup = forwardRef<
  ElementRef<typeof Group>,
  CommandGroupProps
>(({ className, ...props }, forwardedRef) => (
  <Group
    ref={forwardedRef}
    className={twMerge(commandGroupVariants({ className }))}
    {...props}
  />
));

CommandGroup.displayName = Group.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandSeparator
 * -------------------------------------------------------------------------- */

export const commandSeparatorVariants = cva('bg-border h-px');

export type CommandSeparatorProps = ComponentPropsWithoutRef<typeof Separator> &
  VariantProps<typeof commandSeparatorVariants>;

export const CommandSeparator = forwardRef<
  ElementRef<typeof Separator>,
  CommandSeparatorProps
>(({ className, ...props }, forwardedRef) => (
  <Separator
    ref={forwardedRef}
    className={twMerge(commandSeparatorVariants({ className }))}
    {...props}
  />
));

CommandSeparator.displayName = Separator.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandItem
 * -------------------------------------------------------------------------- */

export const commandItemVariants = cva([
  'group relative flex cursor-pointer select-none items-center gap-2 rounded px-2 py-1.5 text-sm outline-none',
  'hover:text-accent-foreground hover:bg-accent',
  'aria-selected:text-accent-foreground aria-selected:bg-accent',
  'aria-disabled:pointer-events-none aria-disabled:opacity-50',
]);

export type CommandItemProps = ComponentPropsWithoutRef<typeof Item> &
  VariantProps<typeof commandItemVariants>;

export const CommandItem = forwardRef<
  ElementRef<typeof Item>,
  CommandItemProps
>(({ className, ...props }, forwardedRef) => (
  <Item
    ref={forwardedRef}
    className={twMerge(commandItemVariants({ className }))}
    {...props}
  />
));

CommandItem.displayName = Item.displayName;
