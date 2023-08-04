import { isAfter, isBefore, isSameDay, parse } from 'date-fns';
import { ChangeEvent } from 'react';
import { DateRange, DayRender, Matcher } from 'react-day-picker';

export const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/\d{4}$/;
export const timeRegex = /^(1[0-2]|0?[1-9]):([0-5]?[0-9]) ([AP])M$/;

export const isValidDate = (value: string): boolean => {
  return dateRegex.test(value);
};

export const isValidTime = (value: string): boolean => {
  return timeRegex.test(value);
};

export const isDateOutOfRange = (
  date: Date,
  minDate?: Date,
  maxDate?: Date,
): boolean => {
  if (minDate && isBefore(date, minDate)) {
    return true;
  }

  return !!(maxDate && isAfter(date, maxDate));
};

export const handleInvalidDate = (event: ChangeEvent<HTMLInputElement>) => {
  event.target.setCustomValidity('Invalid date');
};

export const handleValidDate = (event: ChangeEvent<HTMLInputElement>) => {
  if (!event.target.checkValidity()) {
    event.target.setCustomValidity('');
  }
};

export const getCurrentDate = (value: string, date: Date): Date => {
  let currentDate = new Date(value);

  if (currentDate.toString() === 'Invalid Date') {
    currentDate = new Date();
  }

  currentDate.setHours(
    date.getHours() ?? 0,
    date.getMinutes() ?? 0,
    date.getSeconds() ?? 0,
    date.getMilliseconds() ?? 0,
  );

  return currentDate;
};

export const getCurrentTime = (value: string, date: Date): Date => {
  return parse(value, 'h:mm a', date);
};

export const getFormattedTime = (value: string, date: Date): string => {
  return value.length === 0
    ? date.toLocaleTimeString(undefined, { timeStyle: 'short' }) ?? ''
    : value.toUpperCase();
};

export const getFormattedDate = (value: string, date: Date): string => {
  return value.length === 0 ? date.toLocaleDateString() ?? '' : value;
};

export const matcherToArray = (matcher?: Matcher | Matcher[]): Matcher[] => {
  if (Array.isArray(matcher)) {
    return [...matcher];
  } else if (matcher !== undefined) {
    return [matcher];
  } else {
    return [];
  }
};

export const createDate = (
  date: Date | undefined,
  hours: number,
  minutes: number,
  seconds: number,
  milliseconds: number,
) => {
  if (date) {
    return date;
  }

  return new Date(new Date().setHours(hours, minutes, seconds, milliseconds));
};

export const isSelectedDayDateRange = (
  selectedDays: DayRender['selectedDays'],
): selectedDays is DateRange => {
  return selectedDays !== undefined && 'from' in selectedDays;
};

export const getDateByRange = (day: Date, range: DateRange) => {
  const { from, to } = range;

  if (!from) {
    day.setHours(0, 0, 0, 0);

    return day;
  }

  if (!to && isBefore(day, from)) {
    day.setHours(
      from.getHours(),
      from.getMinutes(),
      from.getSeconds(),
      from.getMilliseconds(),
    );
    from.setHours(23, 59, 59, 999);

    return day;
  }

  if (!to) {
    day.setHours(23, 59, 59, 999);

    return day;
  }

  if (isSameDay(day, to)) {
    to.setHours(
      from.getHours(),
      from.getMinutes(),
      from.getSeconds(),
      from.getMilliseconds(),
    );
  }

  if (isBefore(day, from) || isSameDay(day, to)) {
    day.setHours(
      from.getHours(),
      from.getMinutes(),
      from.getSeconds(),
      from.getMilliseconds(),
    );

    return day;
  }

  if (isAfter(day, from)) {
    day.setHours(
      to.getHours(),
      to.getMinutes(),
      to.getSeconds(),
      to.getMilliseconds(),
    );

    return day;
  }

  return day;
};
