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
import { getUserPets } from 'helpers/axios/getUserPets';
import { ModalLayout } from 'components/ModalLayout/ModalLayout';
import {AddUserPetModal} from "components/AddUserPetModal/AddUserPetModal"

export const UserPage = () => {
  const [petList, setPetList] = useState(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
        getUserPets().then(res => {
            console.log(res);
            setPetList(res.data)
        })
  }, [])
  
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
            {petList ? (<PetList>
              {petList.map(pet => {
                const {_id, name, breed, date, avatarURL, comments} = pet
                return (<UserPetItem key={_id} id={_id} name={name} breed={breed} date={date} avatarURL={avatarURL} comments={comments} />)
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
        {showModal && <ModalLayout setShowModal={toggleModal}>
          <AddUserPetModal onClose={toggleModal}/>
        </ModalLayout>}
        </Container>
    </>;
};