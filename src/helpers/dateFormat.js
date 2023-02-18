import { format } from 'date-fns';

export const dateFormat = date => {
  const result = format(new Date(date), 'dd/MM/yyyy');
  return result;
};
