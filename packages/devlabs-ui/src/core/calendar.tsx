import { cva, cx, VariantProps } from 'class-variance-authority';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  FC,
  FocusEvent,
  FocusEventHandler,
  Fragment,
  HTMLAttributes,
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import {
  Button,
  DateRange,
  DayPicker,
  DayProps,
  isMatch,
  Matcher,
  SelectRangeEventHandler,
  useDayRender,
  useSelectRange,
} from 'react-day-picker';
import { twMerge } from 'tailwind-merge';
import {
  createDate,
  dateRegex,
  getCurrentDate,
  getCurrentTime,
  getDateByRange,
  getFormattedDate,
  getFormattedTime,
  handleInvalidDate,
  handleValidDate,
  isDateOutOfRange,
  isSelectedDayDateRange,
  isValidDate,
  isValidTime,
  matcherToArray,
  timeRegex,
} from '../utils/calendar';
import { buttonVariants } from './button';
import { Input } from './input';
import { Label } from './label';

/* -----------------------------------------------------------------------------
 * Component: CalendarDateTimeInput
 * -------------------------------------------------------------------------- */

const calendarDateTimeInputVariants = cva('max-w-[15.75rem] space-y-1');

type CalendarDateTimeInputVariants = VariantProps<
  typeof calendarDateTimeInputVariants
> & {
  date: Date;
  disabled: Matcher[];
  label: {
    date: string;
    root: string;
    time: string;
  };
  maxDate?: Date;
  minDate?: Date;
  onChange?: (day: Date, event: MouseEvent) => void;
};

type CalendarDateTimeInputProps = CalendarDateTimeInputVariants &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CalendarDateTimeInputVariants>;

const CalendarDateTimeInput: FC<CalendarDateTimeInputProps> = ({
  date,
  label,
  onChange,
  minDate,
  maxDate,
  className,
  disabled,
  ...props
}) => {
  const id = useId();
  const [dateValue, setDateValue] = useState<string>(date.toLocaleDateString());
  const [timeValue, setTimeValue] = useState<string>(
    date.toLocaleTimeString(undefined, { timeStyle: 'short' }),
  );
  const newDateRef = useRef<Date | undefined>(undefined);

  useEffect(() => {
    setDateValue(date.toLocaleDateString());
    setTimeValue(date.toLocaleTimeString(undefined, { timeStyle: 'short' }));
  }, [date]);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (!['Enter'].includes(event.key)) {
        return;
      }

      if (newDateRef.current) {
        onChange?.(newDateRef.current, event as any);
        handleValidDate(event as any);
      }
    },
    [onChange],
  );

  const handleDateChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setDateValue(getFormattedDate(value, date));

      if (!isValidDate(value)) {
        return;
      }

      const currentDate = getCurrentDate(value, date);

      if (
        isDateOutOfRange(currentDate, minDate, maxDate) ||
        isMatch(currentDate, disabled)
      ) {
        handleInvalidDate(event);

        return;
      }

      handleValidDate(event);
      newDateRef.current = currentDate;
    },
    [date, disabled, maxDate, minDate],
  );

  const handleTimeChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setTimeValue(getFormattedTime(value, date));

      if (!isValidTime(value)) {
        return;
      }

      const currentDate = getCurrentTime(value, date);

      if (
        isDateOutOfRange(currentDate, minDate, maxDate) ||
        isMatch(currentDate, disabled)
      ) {
        handleInvalidDate(event);

        return;
      }

      handleValidDate(event);
      newDateRef.current = currentDate;
    },
    [date, disabled, maxDate, minDate],
  );

  const handleDateBlur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (event: FocusEvent<HTMLInputElement>) => {
      if (dateRegex.test(event.target.value) && newDateRef.current) {
        onChange?.(newDateRef.current, event as any);
      }

      handleValidDate(event);
      setDateValue(date.toLocaleDateString());
    },
    [date, onChange],
  );

  const handleTimeBlur = useCallback<FocusEventHandler<HTMLInputElement>>(
    (event: FocusEvent<HTMLInputElement>) => {
      if (timeRegex.test(event.target.value) && newDateRef.current) {
        onChange?.(newDateRef.current, event as any);
      }

      handleValidDate(event);
      setTimeValue(date.toLocaleTimeString(undefined, { timeStyle: 'short' }));
    },
    [date, onChange],
  );

  return (
    <div
      className={twMerge(calendarDateTimeInputVariants({ className }))}
      {...props}
    >
      <Label className="text-muted-foreground block text-xs" htmlFor={id}>
        {label.root}
      </Label>

      <div className="grid min-w-0 grid-cols-[55fr_45fr] gap-1">
        <Input
          required
          aria-label={label.date}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          className="invalid:border-destructive"
          id={id}
          pattern={dateRegex.source}
          placeholder="mm/dd/yyyy"
          size="sm"
          spellCheck={false}
          title={label.date}
          type="text"
          value={dateValue}
          onBlur={handleDateBlur}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
        />

        <Input
          required
          aria-label={label.time}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          className="invalid:border-destructive"
          pattern={timeRegex.source}
          placeholder="hh:mm AM/PM"
          size="sm"
          spellCheck={false}
          title={label.time}
          type="text"
          value={timeValue}
          onBlur={handleTimeBlur}
          onChange={handleTimeChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
};

/* -----------------------------------------------------------------------------
 * Component: CalendarRangeInput
 * -------------------------------------------------------------------------- */

const calendarRangeInputVariants = cva('flex flex-col gap-x-4 gap-y-2');

type CalendarRangeInputVariants = VariantProps<
  typeof calendarRangeInputVariants
> & {
  disabled?: Matcher | Matcher[];
  onSelect?: SelectRangeEventHandler;
  selected?: DateRange;
};

type CalendarRangeInputProps = CalendarRangeInputVariants &
  Omit<HTMLAttributes<HTMLDivElement>, keyof CalendarRangeInputVariants>;

const CalendarRangeInput: FC<CalendarRangeInputProps> = ({
  selected,
  disabled,
  onSelect,
  className,
  ...props
}) => {
  const from = createDate(selected?.from, 0, 0, 0, 0);
  const to = createDate(selected?.to, 23, 59, 59, 999);

  return (
    <div
      className={twMerge(calendarRangeInputVariants({ className }))}
      {...props}
    >
      <CalendarDateTimeInput
        date={from}
        disabled={matcherToArray(disabled)}
        label={{ root: 'Start', date: 'Start date', time: 'Start time' }}
        maxDate={to}
        onChange={(date, event) =>
          onSelect?.({ from: date, to }, date, {}, event)
        }
      />

      <CalendarDateTimeInput
        date={to}
        disabled={matcherToArray(disabled)}
        label={{ root: 'End', date: 'End date', time: 'End time' }}
        minDate={from}
        onChange={(date, event) =>
          onSelect?.({ from, to: date }, date, {}, event)
        }
      />
    </div>
  );
};

/* -----------------------------------------------------------------------------
 * Component: CalendarDay
 * -------------------------------------------------------------------------- */

const CalendarDay = (props: DayProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dayRender = useDayRender(props.date, props.displayMonth, buttonRef);
  const range = useSelectRange();

  const handleClick = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (event) => {
      if (!isSelectedDayDateRange(dayRender.selectedDays)) {
        dayRender.buttonProps.onClick?.(event);

        return;
      }

      const day = getDateByRange(
        new Date(props.date.getTime()),
        dayRender.selectedDays,
      );

      range.onDayClick?.(day, dayRender.activeModifiers, event);
    },
    [dayRender, props.date, range],
  );

  if (dayRender.isHidden) {
    return <div role="gridcell" />;
  }

  if (!dayRender.isButton) {
    return <div {...dayRender.divProps} />;
  }

  return (
    <Button
      ref={buttonRef}
      name="day"
      {...dayRender.buttonProps}
      onClick={handleClick}
    />
  );
};

/* -----------------------------------------------------------------------------
 * Component: Calendar
 * -------------------------------------------------------------------------- */

export type CalendarProps = ComponentProps<typeof DayPicker> & {
  // Show the date range input when the mode is `range`.
  showDateRangeInput?: boolean;
};

export const Calendar: FC<CalendarProps> = ({
  showDateRangeInput,
  classNames,
  ...props
}) => (
  <Fragment>
    {props.mode === 'range' && showDateRangeInput && (
      <CalendarRangeInput
        disabled={props.disabled}
        selected={props.selected}
        className={cx(
          'mb-4',
          props.numberOfMonths && props.numberOfMonths > 1 && 'sm:flex-row',
        )}
        onSelect={props.onSelect}
      />
    )}

    <DayPicker
      showOutsideDays
      classNames={{
        vhidden: 'hidden',
        caption: 'relative flex items-center justify-center',
        caption_label: cx([
          'inline-flex items-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium',
          'peer-hover:border-input',
          'peer-focus:ring-ring/40 peer-hover:bg-accent peer-focus:border-input peer-focus:ring-2',
        ]),
        caption_dropdowns: 'relative inline-flex gap-4',
        dropdown: 'peer absolute inset-0 text-sm font-medium opacity-0',
        dropdown_month: 'relative inline-flex items-center',
        dropdown_year: 'relative inline-flex items-center',
        dropdown_icon: 'h-2 w-2',
        months: 'flex flex-col gap-4 sm:flex-row',
        month: 'w-full space-y-4',
        table: 'block table-fixed border-collapse',
        tbody: 'block',
        head: 'block',
        head_row: 'flex',
        head_cell: 'text-muted-foreground flex-1 text-xs font-medium uppercase',
        nav: '',
        nav_button: buttonVariants({
          icon: true,
          variant: 'outline',
          size: 'sm',
          className: 'absolute inset-y-0',
        }),
        nav_button_previous: 'left-0',
        nav_button_next: 'right-0',
        row: 'my-1 flex',
        weeknumber: 'weeknumber text-xs',
        cell: cx([
          'cell relative flex h-8 flex-1 items-center justify-center px-0.5 first:rounded-l-md last:rounded-r-md',
          '[&:has(.weeknumber)+&]:rounded-l-md',
          '[&:has(.day-range-middle)]:bg-accent',
          '[&:has(.day-range-end:not(.day-range-start))]:before:bg-accent [&:has(.day-range-end:not(.day-range-start))]:before:absolute [&:has(.day-range-end:not(.day-range-start))]:before:inset-y-0 [&:has(.day-range-end:not(.day-range-start))]:before:left-0 [&:has(.day-range-end:not(.day-range-start))]:before:w-1/2',
          '[&:has(.day-range-start:not(.day-range-end))]:after:bg-accent [&:has(.day-range-start:not(.day-range-end))]:after:absolute [&:has(.day-range-start:not(.day-range-end))]:after:inset-y-0 [&:has(.day-range-start:not(.day-range-end))]:after:right-0 [&:has(.day-range-start:not(.day-range-end))]:after:w-1/2',
        ]),
        day: cx([
          'day z-1 relative flex h-8 w-8 items-center justify-center rounded-md border border-transparent text-center text-sm',
          '[&:not(.day-today,[disabled],[role="gridcell"])]:hover:border-primary',
        ]),
        day_outside: 'text-muted-foreground/75',
        day_selected: cx([
          'bg-primary',
          'focus:ring-primary focus:ring-1 focus:ring-offset-1',
          '[&:not(.day-range-middle)]:text-primary-foreground',
          '[&:is(.day-today):not(.day-range-middle)]:border-primary',
          '[&:is(.day-today):not(.day-range-middle)]:bg-primary',
        ]),
        day_disabled: 'disabled:text-muted-foreground/25',
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_range_middle: 'day-range-middle [&:not(.day-today)]:bg-accent',
        day_today:
          'day-today bg-primary/10 [&:not([disabled])]:hover:border-primary text-primary',
        ...classNames,
      }}
      components={{
        IconLeft: (rest) => <ChevronLeftIcon {...rest} className="h-4 w-4" />,
        IconRight: (rest) => <ChevronRightIcon {...rest} className="h-4 w-4" />,
        Day: props.mode === 'range' ? CalendarDay : undefined,
      }}
      {...props}
    />
  </Fragment>
);
