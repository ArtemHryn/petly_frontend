import { MdPhotoCamera } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

import {
    UserBox,
    UserPhotoBox,
    UserPhoto,
    UserPhotoForm,
    UserPhotoLabel,
    UserInfoList,
    LogOutBtn,
} from "./styles/UserInfo.styled"
import userAvatar from "../../images/userAvatar.png"
import { logout } from 'helpers/axios/logout';
import { InfoItem } from './UserInfoString';
import { useSelector } from 'react-redux';

export const UserInfo = () => {
    const userData = useSelector(state => state.auth.user)

    const info = Object.keys(userData)
    info.splice(0, 1)
    info.splice(4, 1)
    info.splice(5, 3)

    const logOut = () => {
        logout()
    }

    if (!userData) {
        return
    }

    const { userPhotoURL } = userData
    return <UserBox>
                <UserPhotoBox>
                    <UserPhoto src={userPhotoURL ? userPhotoURL : userAvatar} alt="profilePhoto" />
                    <UserPhotoForm>
                <UserPhotoLabel>
                        <input
                                style={{ visibility: 'hidden', width: '1px' }}
                                accept="image/*"
                                type="file"
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
                {info.map(item => {
                    return (<InfoItem key={item} item={item} value={userData[item]} />)
                })}
            </UserInfoList>
            <LogOutBtn type="button" onClick={logOut}>
                <FiLogOut style={{color: "#F59256", marginRight: "8px", fontSize: "18px"}} />
                Log Out
            </LogOutBtn>
            </div>
            </UserBox>
}