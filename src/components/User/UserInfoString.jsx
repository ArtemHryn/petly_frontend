import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/auth/auth-operations';
import {
  UserDataChangeBtn,
  UserInfoData,
  UserInfoDescr,
  UserInfoInput,
  UserInfoItem,
  StyledFaPen,
  StyledCheck,
} from './styles/UserInfoString.styled';
import PropTypes from 'prop-types';

export const InfoItem = ({ item }) => {
  const [name, value] = item;
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const [newValue, setNewValue] = useState('');

  const onEdit = () => {
    setFocus(prev => !prev);
    setNewValue(value);
    if (value === newValue) {
      return;
    }
    if (focus) {
      dispatch(updateUser({ [name]: newValue }));
    }
  };

  return (
    <UserInfoItem>
      <UserInfoDescr>{name}</UserInfoDescr>
      {!focus ? (
        <UserInfoData onDoubleClick={() => setFocus(prev => !prev)}>
          {value}
        </UserInfoData>
      ) : (
        <UserInfoInput
          type="text"
          value={newValue}
          onChange={evt => setNewValue(evt.target.value)}
          autoFocus
        />
      )}
      <UserDataChangeBtn type="button" onClick={onEdit}>
        {!focus ? <StyledFaPen /> : <StyledCheck />}
      </UserDataChangeBtn>
    </UserInfoItem>
  );
};

InfoItem.propTypes = {
  item: PropTypes.array,
};
