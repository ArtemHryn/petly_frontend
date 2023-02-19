import { toast } from 'react-toastify';

export const toastSuccess = message => {
  toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    progress: undefined,
    theme: 'light',
  });

  toast.onChange(payload => {
    if (payload.status === 'removed') {
      console.log('Redirect');
    }
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
