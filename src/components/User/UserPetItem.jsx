import { IoTrashSharp } from 'react-icons/io5';
import {
    PetItem,
    PetPhoto,
    DeletePetBtn,
    PetInfoList,
    PetInfoItem
} from "./styles/UserPetItem.styled"
import PropTypes from 'prop-types';
import petPhotoNull from "../../images/petPhotoNull.jpg"

export const UserPetItem = ({id, name, breed, date, avatarURL, comments}) => {
    return <PetItem key={id}>
        <PetPhoto src={avatarURL ? {avatarURL} : {petPhotoNull}} alt="petPhoto" />
                    <DeletePetBtn type="button">
                        <IoTrashSharp style={{color: "rgba(17, 17, 17, 0.6)", fontSize: "20px"}} />
                    </DeletePetBtn>
                    <PetInfoList>
                        <PetInfoItem>Name: {name}</PetInfoItem>
                        <PetInfoItem>Date of birth: {date}</PetInfoItem>
                        <PetInfoItem>Breed: {breed}</PetInfoItem>
                        <PetInfoItem>Comments: {comments}</PetInfoItem>
                    </PetInfoList>
    </PetItem>
}

UserPetItem.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    breed: PropTypes.string,
    date: PropTypes.string,
    avatarURL: PropTypes.string,
    comments: PropTypes.string
}
