'use client';

import { format } from 'date-fns';
import { CalendarDaysIcon } from 'lucide-react';
import { ComponentProps, ComponentPropsWithoutRef, FC, useMemo } from 'react';
import { Button } from './button';
import { Calendar } from './core/calendar';
import { Slot } from './core/slot';
import { FormControl } from './form';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

/* -----------------------------------------------------------------------------
 * Exported components
 * -------------------------------------------------------------------------- */

export * from 'react-day-picker';

export * from './core/calendar';

/* -----------------------------------------------------------------------------
 * Component: DatePicker
 * -------------------------------------------------------------------------- */

export type DatePickerProps = ComponentProps<typeof Calendar> & {
  slot?: {
    FormControl?: FC<ComponentPropsWithoutRef<typeof FormControl>>;
  };
};

export const DatePicker: FC<DatePickerProps> = ({ slot, ...props }) => {
  const displaySelected = useMemo(() => {
    switch (props.mode) {
      case 'single':
        return props.selected
          ? props.selected.toLocaleDateString()
          : 'Select date';

      case 'multiple':
        return props.selected
          ? props.selected.map((date) => date.toLocaleDateString()).join(', ')
          : 'Select dates';

      case 'range':
        return props.selected?.from
          ? props.selected?.to
            ? `${format(props.selected?.from, 'M/d hh:mm a')} - ${format(
                props.selected?.to,
                'M/d hh:mma',
              )}`
            : format(props.selected?.from, 'M/d hh:mm a')
          : 'Select date range';

      default:
        return 'Select date';
    }
  }, [props.mode, props.selected]);

  const Trigger = slot?.FormControl ?? Slot;

  return (
    <Popover variant="simple">
      <Trigger>
        <PopoverTrigger asChild>
          <Button startIcon={CalendarDaysIcon} variant="outline">
            {displaySelected}
          </Button>
        </PopoverTrigger>
      </Trigger>

      <PopoverContent align="start" className="p-3" sideOffset={5} size="auto">
        <Calendar initialFocus {...props} />
      </PopoverContent>
    </Popover>
  );
};
