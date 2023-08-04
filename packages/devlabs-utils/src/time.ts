import { format, parseISO } from 'date-fns';
export const formatDatetime = (
  date: Date | string,
  formatString = 'dd/MM/yyyy',
): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;

  return format(parsedDate, formatString);
};
