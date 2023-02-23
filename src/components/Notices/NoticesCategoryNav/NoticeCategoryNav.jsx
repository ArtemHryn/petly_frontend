import { Box } from 'components/Box';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { ToastContainer } from 'react-toastify';
import { UpdatingLoader } from 'components/common/UpdatingLoader/UpdatingLoader';

import { toastError } from 'helpers/toast-notifications/toasts-notifications';
import {
  AddPetButton,
  AddPetText,
  ButtonElement,
  ButtonList,
  FilterButton,
} from './NoticeCategoryNav.styled';
import { getNoticeIsUpdating } from 'redux/notices/noticesSelectors';

export const NoticeCategoryNav = ({ setShowModal }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
    const isUpdating = useSelector(getNoticeIsUpdating);

  const filterButtons = [
    { title: 'lost/found', to: 'lost-found', display: true },
    { title: 'in good hands', to: 'for-free', display: true },
    { title: 'sell', to: 'sell', display: true },
    { title: 'favorite ads', to: 'favorite', display: isLoggedIn },
    { title: 'my ads', to: 'own', display: isLoggedIn },
  ];

  const onOpenModal = () => {
    if (!isLoggedIn) {
      toastError('Yohoho, you aren\'t still log in ');
      return;
    }
    setShowModal(true);
  };
  return (
    <>
      {' '}
      <Box
        display={[null, 'flex']}
        alignItems="flex-start"
        justifyContent="space-between"
        mb={['30px', '60px']}
      >
        <ButtonList>
          {filterButtons.map(({ title, to, display }) => {
            return (
              display && (
                <ButtonElement key={title}>
                  <FilterButton to={to}>{title}</FilterButton>
                </ButtonElement>
              )
            );
          })}
          <li>{isUpdating && <UpdatingLoader />}</li>
        </ButtonList>
        <Box display={['none', 'flex']} alignItems="center">
          <AddPetText>Add pet</AddPetText>
          <AddPetButton
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            type="button"
            display={[null, 'flex']}
            position={['static']}
            width={[null, '44px']}
            height={[null, '44px']}
            onClick={onOpenModal}
          >
            <AiOutlinePlus style={{ color: '#FFFFFF', fontSize: '26px' }} />
          </AddPetButton>
        </Box>
      </Box>
      <ToastContainer />
    </>
  );
};
