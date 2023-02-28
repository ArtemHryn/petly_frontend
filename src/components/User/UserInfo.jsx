import { useDispatch } from 'react-redux';

import {
  UserBox,
  UserPhotoBox,
  UserPhoto,
  UserPhotoForm,
  UserPhotoLabel,
  UserInfoList,
  LogOutBtn,
  Camera,
  LogOutIcon,
  PhotoEdiotContainer,
} from './styles/UserInfo.styled';
import userAvatar from '../../images/userAvatar.png';
import { InfoItem } from './UserInfoString';
import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/authSelector';
import { logout, pushUserPhoto } from 'redux/auth/auth-operations';
import { format } from 'date-fns';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { name, email, birthday, phone, city, userPhotoURL } =
    useSelector(getUser);

  const setCorrectBD = () => {
    try {
      const parsedDate = new Date(Date.parse(birthday));
      return format(new Date(parsedDate), 'dd.MM.yyyy');
    } catch (error) {
      return 'MM.DD.YYYY';
    }
  };
  const info = {
    name,
    email,
    birthday: birthday ? setCorrectBD() : 'no info',
    phone,
    city,
  };

  const onChange = evt => {
    const files = evt.target.files;
    dispatch(pushUserPhoto({ userPhoto: files[0] }));
  };

  return (
    <UserBox>
      <UserPhotoBox>
        <UserPhoto
          src={userPhotoURL ? userPhotoURL : userAvatar}
          alt="profilePhoto"
        />
        <UserPhotoForm>
          <UserPhotoLabel>
            <input
              style={{ visibility: 'hidden', width: '1px' }}
              accept="image/*"
              type="file"
              onChange={onChange}
              encType="multipart/form-data"
            />
            <PhotoEdiotContainer
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              whileTap={{scale: 0.95}}
            >
              {' '}
              <Camera />
              Edit photo
            </PhotoEdiotContainer>
          </UserPhotoLabel>
        </UserPhotoForm>
      </UserPhotoBox>
      <div>
        <UserInfoList>
          {Object.entries(info).map(item => (
            <InfoItem key={item} item={item} />
          ))}
        </UserInfoList>
        <LogOutBtn type="button" onClick={() => dispatch(logout())}>
          <LogOutIcon />
          Log Out
        </LogOutBtn>
      </div>
    </UserBox>
  );
};