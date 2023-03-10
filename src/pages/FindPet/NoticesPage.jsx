import { Container } from 'components/Container/Container';
import { AiOutlinePlus } from 'react-icons/ai';

import { Title } from 'components/Title/Title';
import { NoticeSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticeCategoryNav } from 'components/Notices/NoticesCategoryNav/NoticeCategoryNav';
import { AddPetButton } from 'components/Notices/NoticesCategoryNav/NoticeCategoryNav.styled';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ModalLayout } from 'components/ModalLayout/ModalLayout';
import { AddNoticeModal } from 'components/Notices/AddNoticeModal/AddNoticeModal';
import { AnimatePresence } from 'framer-motion';

export const NoticesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const onAddPet = () => {
    setShowModal(true);
  };

  return (
    <Container>
      <Title mb={[11]} fontSize={['24px', '48px', '40px']}>
        Find your favorite pet
      </Title>
      <NoticeSearch />

      <NoticeCategoryNav setShowModal={setShowModal} />

      <AddPetButton
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        type="button"
        onClick={onAddPet}
      >
        <AiOutlinePlus style={{ color: '#FFFFFF', fontSize: '26px' }} />
        Add pet
      </AddPetButton>
      <AnimatePresence>
        {' '}
        {showModal && (
          <ModalLayout
            setShowModal={setShowModal}
            maxWidth={[null, '608px']}
            maxHeight={[null, '885px']}
            p={[null, '40px 80px']}
          >
            <AddNoticeModal setShowModal={setShowModal} />
          </ModalLayout>
        )}
      </AnimatePresence>

      <Outlet />
    </Container>
  );
};
