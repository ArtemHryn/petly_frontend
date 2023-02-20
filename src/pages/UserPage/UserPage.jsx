import { AiFillPlusCircle } from 'react-icons/ai';
import {useState} from "react"
import {
    UserPageTitle,
    PetTitleBox,
    AddPetBox,
    AddPetText,
    AddPetBtn,
    PetList,
    UserPageBox,
} from "./styles/UserPage.styled"
import { Container } from 'components/Container/Container';
import { UserInfo } from './UserInfo';
import { UserPetItem } from './UserPetItem';
import { ModalLayout } from 'components/ModalLayout/ModalLayout';
import { AddUserPetModal } from 'components/AddUserPetModal/AddUserPetModal';

export const UserPage = () => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(showModal => !showModal)
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
            <PetList>
                {/* map */}

                <UserPetItem/>
            </PetList>
          </div>
        </UserPageBox>
        {showModal && <ModalLayout setShowModal={toggleModal}>
          <AddUserPetModal onClose={toggleModal}/>
        </ModalLayout>}
        </Container>
    </>;
};