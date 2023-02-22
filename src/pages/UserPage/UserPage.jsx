import { AiFillPlusCircle } from 'react-icons/ai';
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
} from "./UserPage.styled"
import { Container } from 'components/Container/Container';
import { UserInfo } from '../../components/User/UserInfo';
import { UserPetItem } from '../../components/User/UserPetItem';
import { ModalLayout } from 'components/ModalLayout/ModalLayout';
// import { AddUserPetModal } from "components/User/AddUserPetModal/AddUserPetModal"
import {AddUserPetModal} from "components/User/AddUserPetModal/Add"
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from 'redux/pets/petsOperations';
import { petsList } from 'redux/pets/petSelectors';

export const UserPage = () => {
  const dispatch = useDispatch()
  const userPets = useSelector(petsList)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    dispatch(getPets())
  }, [dispatch])
  
  const toggleModal = () => {
    setShowModal(true)
  }
    return <>
      <Container>
        <UserPageBox>
          <div>
            <UserPageTitle>My information:</UserPageTitle>
            <UserInfo/>
          </div>
          <div>
            <PetTitleBox>
                <UserPageTitle>My pets:</UserPageTitle>
                <AddPetBox>
                    <AddPetText>Add pet</AddPetText>
                      <AddPetBtn type="button" onClick={toggleModal}>
                        <AiFillPlusCircle style={{display: "block", fontSize: "40px", color: "#F59256"}} />
                      </AddPetBtn>
                </AddPetBox>
            </PetTitleBox>
            {userPets.length !== 0 ? (<PetList>
              {userPets.map(pet => {
                return (<UserPetItem id={pet._id} key={pet._id} pet={pet} />)
              })}
            </PetList>) : 
              (
              <NoUserPetsBox>
                  <NoPetsText>There is no pets in your list</NoPetsText>
              </NoUserPetsBox>
            )
            }
          </div>
        </UserPageBox>
        {/* {showModal && <ModalLayout setShowModal={toggleModal}>
          <AddUserPetModal onClose={toggleModal}/>
        </ModalLayout>} */}
        {showModal && <ModalLayout setShowModal={toggleModal}>
          <AddUserPetModal setShowModal={toggleModal}/>
        </ModalLayout>}
        </Container>
    </>;
};