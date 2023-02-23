import { MdPhotoCamera } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

import {
  UserBox,
  UserPhotoBox,
  UserPhoto,
  UserPhotoForm,
  UserPhotoLabel,
  UserInfoList,
  LogOutBtn,
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
  let rightBirth;
  const parsedDate = new Date(Date.parse(birthday));
  try {
    rightBirth = format(new Date(parsedDate), 'dd.MM.yyyy');
  } catch (error) {
    rightBirth = format(new Date(birthday), 'yyyy-MM-dd');
  }
  const info = { name, email, birthday: rightBirth, phone, city };

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
            <MdPhotoCamera
              style={{
                color: '#F59256',
                marginRight: '5px',
                width: '18px',
                height: '18px',
              }}
            />
            Edit photo
          </UserPhotoLabel>
        </UserPhotoForm>
      </UserPhotoBox>
      <div>
        <UserInfoList>
          {Object.entries(info).map(item => <InfoItem key={item} item={item} />)}
        </UserInfoList>
        <LogOutBtn type="button" onClick={() => dispatch(logout())}>
          <FiLogOut
            style={{ color: '#F59256', marginRight: '8px', fontSize: '18px' }}
          />
          Log Out
        </LogOutBtn>
      </div>
    </UserBox>
  );
};
