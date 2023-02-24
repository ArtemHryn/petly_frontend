import { useState, useEffect } from 'react';
import {
  UserPageTitle,
  PetTitleBox,
  AddPetBox,
  AddPetText,
  AddPetBtn,
  PetList,
  UserPageBox,
  NoUserPetsBox,
  NoPetsText,
  PlusCircle,
} from './UserPage.styled';
import { Container } from 'components/Container/Container';
import { UserInfo } from '../../components/User/UserInfo';
import { UserPetItem } from '../../components/User/UserPetItem';
import { ModalLayout } from 'components/ModalLayout/ModalLayout';
import { AddUserPetModal } from 'components/User/AddUserPetModal/AddUserPetModal';
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from 'redux/pets/petsOperations';
import { petAwait, petsList, updateList } from 'redux/pets/petSelectors';
import { AnimatePresence } from 'framer-motion';
import { ListLoader } from 'components/common/ListLoader/ListLoader';
import { UpdatingLoader } from 'components/common/UpdatingLoader/UpdatingLoader';
import { updateUser } from 'redux/auth/authSelector';
import { Box } from 'components/Box';

export const UserPage = () => {
  const dispatch = useDispatch();
  const userPets = useSelector(petsList);
  const pageAwait = useSelector(petAwait);
  const updatePetList = useSelector(updateList)
  const upadeteUserInfo = useSelector(updateUser)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  const toggleModal = () => {
    setShowModal(true);
  };
  return (
    <>
      <Container>
        {pageAwait ? (<ListLoader />) : (
          <UserPageBox
            initial={{
              y: -70,
              opacity: 0.3,
        }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.7,
            type: 'cubic-bezier(.49,.99,.82,.98)',
            delayChildren: 0.5,
          },
        }}>
          <div>
              <UserPageTitle>My information:</UserPageTitle>
              {upadeteUserInfo && <UpdatingLoader />}
            <UserInfo />
          </div>
          <Box flexGrow='1'>
            <PetTitleBox>
                <UserPageTitle>My pets:</UserPageTitle>
                {updatePetList && <UpdatingLoader />}
              <AddPetBox>
                <AddPetText>Add pet</AddPetText>
                <AddPetBtn type="button" onClick={toggleModal}>
                  <PlusCircle/>
                </AddPetBtn>
              </AddPetBox>
            </PetTitleBox>
            {userPets.length !== 0 ? (
              <PetList>
                {userPets.map(pet => (
                  <UserPetItem key={pet._id} pet={pet} />
                ))}
              </PetList>
            ) : (
              <NoUserPetsBox>
                <NoPetsText>There is no pets in your list</NoPetsText>
              </NoUserPetsBox>
            )}
          </Box>
        </UserPageBox>
        )}
        <AnimatePresence>
          {showModal && (
            <ModalLayout
              setShowModal={setShowModal}
              maxWidth={[null, '608px']}
              maxHeight={[null, '670px']}
              p={[null, '40px 80px']}
            >
              <AddUserPetModal setShowModal={setShowModal} />
            </ModalLayout>
          )}
        </AnimatePresence>
      </Container>
    </>
  );
};
