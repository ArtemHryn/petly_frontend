import {
  PetItem,
  PetPhoto,
  DeletePetBtn,
  PetInfoList,
  PetInfoItem,
  Trash,
  PetInfoText,
} from './styles/UserPetItem.styled';
import PropTypes from 'prop-types';
import petPhotoNull from '../../images/petPhotoNull.jpg';
import { useDispatch } from 'react-redux';
import { deletePet } from 'redux/pets/petsOperations';
import { format } from 'date-fns';

export const UserPetItem = ({ pet }) => {
  const dispatch = useDispatch();
  const { _id, name, breed, date, avatarURL, comments } = pet;
  const setCorrectBD = () => {
    try {
      const parsedDate = new Date(Date.parse(date));
      return format(new Date(parsedDate), 'dd.MM.yyyy');
    } catch (error) {
      return 'MM.DD.YYYY';
    }
  };
  return (
    <PetItem>
      <PetPhoto src={avatarURL ? avatarURL : petPhotoNull} alt="petPhoto" />
      <PetInfoList>
        <PetInfoItem>
          <PetInfoText fontWeight={500} mr={2}>Name:</PetInfoText>
          <PetInfoText fontWeight={400}>{name}</PetInfoText>
          <DeletePetBtn type="button" onClick={() => dispatch(deletePet(_id))}>
            <Trash/>
          </DeletePetBtn>
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoText fontWeight={500} mr={2}>Date of birth: </PetInfoText>
          <PetInfoText fontWeight={400}>{setCorrectBD()}</PetInfoText>
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoText fontWeight={500} mr={2}>Breed: </PetInfoText>
          <PetInfoText fontWeight={400}>{breed}</PetInfoText>
        </PetInfoItem>
        <PetInfoItem>
          <PetInfoText fontWeight={500} mr={2}>Comments: </PetInfoText>
          <PetInfoText fontWeight={400}>{comments}</PetInfoText>
        </PetInfoItem>
      </PetInfoList>
    </PetItem>
  );
};

UserPetItem.propTypes = {
  pet: PropTypes.object,
};
