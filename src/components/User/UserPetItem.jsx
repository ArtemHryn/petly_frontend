import { IoTrashSharp } from 'react-icons/io5';
import {
  PetItem,
  PetPhoto,
  DeletePetBtn,
  PetInfoList,
  PetInfoItem,
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
        <IoTrashSharp
          style={{ color: 'rgba(17, 17, 17, 0.6)', fontSize: '20px' }}
        />
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
  id: PropTypes.string,
  pet: PropTypes.object,
};
