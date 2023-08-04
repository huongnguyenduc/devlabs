import { cx } from 'class-variance-authority';
import { CheckIcon } from 'lucide-react';
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  Fragment,
  RefAttributes,
  SVGProps,
} from 'react';
import { Command, CommandItem as CommandPrimitiveItem } from './core/command';
import { Dialog, DialogContent } from './dialog';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from './core/command';

/* -----------------------------------------------------------------------------
 * Component: CommandItem
 * -------------------------------------------------------------------------- */

export type CommandItemProps = ComponentPropsWithoutRef<
  typeof CommandPrimitiveItem
> & {
  icon?: FC<RefAttributes<SVGSVGElement>> | FC<SVGProps<SVGSVGElement>>;
  selected?: boolean;
};

export const CommandItem = forwardRef<
  ElementRef<typeof CommandPrimitiveItem>,
  CommandItemProps
>(({ children, selected, icon: Icon, ...props }, forwardedRef) => (
  <CommandPrimitiveItem ref={forwardedRef} {...props}>
    <Fragment>
      {Icon && <Icon className="h-4 w-4" />}
      {children}
      <CheckIcon
        className={cx(
          'ml-auto h-5 w-5',
          selected ? 'opacity-100' : 'opacity-0',
        )}
      />
    </Fragment>
  </CommandPrimitiveItem>
));

CommandItem.displayName = CommandPrimitiveItem.displayName;

/* -----------------------------------------------------------------------------
 * Component: CommandDialog
 * -------------------------------------------------------------------------- */

export type CommandDialogProps = ComponentPropsWithoutRef<typeof Dialog>;

export const CommandDialog: FC<CommandDialogProps> = ({
  children,
  ...props
}) => (
  <Dialog scrollable variant="simple" {...props}>
    <DialogContent>
      <Command variant="dialog">{children}</Command>
    </DialogContent>
  </Dialog>
);
