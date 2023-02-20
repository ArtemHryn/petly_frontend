import { format } from 'date-fns';

export const dateFormat = date => {
  let result;
  try {
    result = format(new Date(date), 'dd/MM/yyyy');
  } catch (error) {
    result = date;
  }
  return result;
};
