import {
  PetItem,
  PetPhoto,
  DeletePetBtn,
  PetInfoList,
  PetInfoItem,
  Trash,
} from './styles/UserPetItem.styled';
import PropTypes from 'prop-types';
import petPhotoNull from '../../images/petPhotoNull.jpg';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/pets/petsOperations';

export const UserPetItem = ({ pet }) => {
  const dispatch = useDispatch();
  const { _id, name, breed, date, avatarURL, comments } = pet;
  return (
    <PetItem>
      <PetPhoto src={avatarURL ? avatarURL : petPhotoNull} alt="petPhoto" />
      <DeletePetBtn type="button" onClick={() => dispatch(deletePet(_id))}>
        <Trash/>
      </DeletePetBtn>
      <PetInfoList>
        <PetInfoItem>Name: {name}</PetInfoItem>
        <PetInfoItem>Date of birth: {date}</PetInfoItem>
        <PetInfoItem>Breed: {breed}</PetInfoItem>
        <PetInfoItem>Comments: {comments}</PetInfoItem>
      </PetInfoList>
    </PetItem>
  );
};

UserPetItem.propTypes = {
  pet: PropTypes.object,
};
