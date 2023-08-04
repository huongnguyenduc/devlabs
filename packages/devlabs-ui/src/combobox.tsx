import { ChevronsUpDownIcon } from 'lucide-react';
import {
  ComponentProps,
  ComponentPropsWithoutRef,
  FC,
  Fragment,
  RefAttributes,
  SVGProps,
  useMemo,
  useState,
} from 'react';
import { Button } from './button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from './command';
import { Slot } from './core/slot';
import { FormControl } from './form';
import { Popover, PopoverContent, PopoverTrigger } from './popover';

/* -----------------------------------------------------------------------------
 * Utils
 * -------------------------------------------------------------------------- */

export interface Option extends Record<string, any> {
  icon?: FC<RefAttributes<SVGSVGElement>> | FC<SVGProps<SVGSVGElement>>;
  label: string;
  value: string;
}

export type OptionGroup = {
  label: string;
  options: Option[];
};

export type Options = Option[] | OptionGroup[];

const isOptionGroup = (options: Options): options is OptionGroup[] =>
  'options' in (options?.[0] ?? []);

const findComboboxOption = (
  options: Options,
  value?: string,
): Option | undefined => {
  if (!value) {
    return undefined;
  }

  if (isOptionGroup(options)) {
    for (const group of options) {
      const option = group.options.find(
        (option) => option.value.toLowerCase() === value,
      );

      if (option) {
        return option;
      }
    }
  } else {
    return options.find((option) => option.value.toLowerCase() === value);
  }
};

/* -----------------------------------------------------------------------------
 * Component: ComboboxGroupItem
 * -------------------------------------------------------------------------- */

type ComboboxGroupItemProps = Omit<
  ComponentProps<typeof CommandItem>,
  'onSelect' | 'selected'
> & {
  heading?: string;
  options: Option[];
  selected?: Option;
  onSelect?: (value: Option) => void;
};

const ComboboxGroupItem: FC<ComboboxGroupItemProps> = ({
  heading,
  options,
  selected,
  onSelect,
  ...props
}) => (
  <CommandGroup heading={heading}>
    {options?.map((option, index) => (
      <CommandItem
        key={index}
        icon={option.icon}
        selected={option.value === selected?.value}
        value={`${option.value}_${option.label}`}
        onSelect={() => onSelect?.(option)}
        {...props}
      >
        {option.label}
      </CommandItem>
    ))}
  </CommandGroup>
);

/* -----------------------------------------------------------------------------
 * Component: Combobox
 * -------------------------------------------------------------------------- */

export type ComboboxProps = Omit<
  ComponentPropsWithoutRef<typeof Command>,
  'onSelect' | 'slot' | 'variant'
> & {
  empty?: string;
  onSelect: (value: Option) => void;
  options: Options;
  placeholder?: string;
  selected: Option | Option['value'] | undefined;
  block?: boolean;
  disabled?: boolean;
  icon?: FC<RefAttributes<SVGSVGElement>> | FC<SVGProps<SVGSVGElement>>;
  slot?: {
    FormControl?: FC<ComponentPropsWithoutRef<typeof FormControl>>;
  };
};

export const Combobox: FC<ComboboxProps> = ({
  icon,
  slot,
  options,
  empty,
  block,
  disabled,
  placeholder,
  selected: initialSelected,
  onSelect,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const Trigger = slot?.FormControl ?? Slot;

  const selected = useMemo(() => {
    if (typeof initialSelected === 'string') {
      return findComboboxOption(options, initialSelected);
    }

    return initialSelected;
  }, [initialSelected, options]);

  return (
    <Popover open={open} variant="simple" onOpenChange={setOpen}>
      <Trigger>
        <PopoverTrigger asChild>
          <Button
            block={block}
            disabled={disabled}
            endIcon={ChevronsUpDownIcon}
            justify="between"
            startIcon={icon}
            variant="outline"
          >
            {selected?.value
              ? selected?.label
              : placeholder ?? 'Select an option'}
          </Button>
        </PopoverTrigger>
      </Trigger>

      <PopoverContent align="start">
        <Command {...props} variant="dialog">
          <CommandInput placeholder={placeholder} />

          <CommandList className="max-h-[calc(var(--radix-popover-content-available-height)-4rem)]">
            <CommandEmpty>{empty}</CommandEmpty>

            {isOptionGroup(options) ? (
              options.map((option, index) => (
                <Fragment key={index}>
                  <ComboboxGroupItem
                    key={index}
                    heading={option.label}
                    options={option.options}
                    selected={selected}
                    onSelect={(value) => {
                      onSelect?.(value);
                      setOpen(false);
                    }}
                  />
                  {index < options.length - 1 && <CommandSeparator />}
                </Fragment>
              ))
            ) : (
              <ComboboxGroupItem
                options={options}
                selected={selected}
                onSelect={(value) => {
                  onSelect?.(value);
                  setOpen(false);
                }}
              />
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
