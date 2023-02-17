import { IoTrashSharp } from 'react-icons/io5';
import {
    PetItem,
    PetPhoto,
    DeletePetBtn,
    PetInfoList,
    PetInfoItem} from "./styles/UserPetItem.styled"

export const UserPetItem = () => {
    return <PetItem>
                    <PetPhoto src="" alt="petPhoto" />
                    <DeletePetBtn type="button">
                        <IoTrashSharp style={{color: "rgba(17, 17, 17, 0.6)", fontSize: "20px"}} />
                    </DeletePetBtn>
                    <PetInfoList>
                        <PetInfoItem>Name:</PetInfoItem>
                        <PetInfoItem>Date of birth:</PetInfoItem>
                        <PetInfoItem>Breed:</PetInfoItem>
                        <PetInfoItem>Comments:</PetInfoItem>
                    </PetInfoList>
    </PetItem>
}