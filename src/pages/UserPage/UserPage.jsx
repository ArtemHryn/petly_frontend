import { AiFillPlusCircle } from 'react-icons/ai';

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

export const UserPage = () => {
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
                    <AddPetBtn type="button">
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
        </Container>
    </>;
};