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
    NoUserPetsBox,
    NoPetsText,
} from "./UserPage.styled"
import { Container } from 'components/Container/Container';
import { UserInfo } from '../../components/User/UserInfo';
import { UserPetItem } from '../../components/User/UserPetItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserPets } from 'helpers/axios/getUserPets';

export const UserPage = () => {
  const [petList, setPetList] = useState(null)

  useEffect(() => {
        getUserPets().then(res => {
            console.log(res);
            setPetList(res.data)
        })
    }, [])

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