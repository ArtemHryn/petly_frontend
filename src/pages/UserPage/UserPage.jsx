import { AiFillPlusCircle } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import { ThreeCircles } from  'react-loader-spinner'
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
import { AddUserPetModal } from "components/User/AddUserPetModal/AddUserPetModal"
import { useDispatch, useSelector } from 'react-redux';
import { getPets } from 'redux/pets/petsOperations';
import { petAwait, petsList } from 'redux/pets/petSelectors';
import { AnimatePresence } from 'framer-motion';

export const UserPage = () => {
  const dispatch = useDispatch()
  const userPets = useSelector(petsList)
  const petListUpdate = useSelector(petAwait)
  const [showModal, setShowModal] = useState(false)
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      dispatch(getPets())
      isFirstRender.current = false
    }
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
              )}
          </div>
          {petListUpdate && (<div style={{ justifyContent: "center", marginTop: "20px", display: "flex" }} >
              <ThreeCircles
              height="100"
              width="100"
              color="#ffc107"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""/>
            </div>)}
        </UserPageBox>
        <AnimatePresence>
          {showModal && <ModalLayout setShowModal={setShowModal} maxWidth={[null, '608px']} maxHeight={[null, '540px']} p={[null, '40px 80px']}>
          <AddUserPetModal setShowModal={setShowModal}/>
          </ModalLayout>}
        </AnimatePresence>
        </Container>
    </>;
};