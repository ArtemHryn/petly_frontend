import { toast } from 'react-toastify';

export const toastSuccess = message => {
  return toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    progress: undefined,
    pauseOnHover: false,
    theme: 'light',
  });
};

export const toastError = message => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    progress: undefined,
    theme: 'light',
  });
};
