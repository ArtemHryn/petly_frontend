import { MdPhotoCamera } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

import {
    UserBox,
    UserPhotoBox,
    UserPhoto,
    UserPhotoForm,
    UserPhotoLabel,
    UserInfoList,
    UserInfoItem,
    UserInfoDescr,
    UserInfoLabel,
    UserInfoInput,
    LogOutBtn} from "./styles/UserInfo.styled"

export const UserInfo = () => {
    return <UserBox>
                <UserPhotoBox>
                    <UserPhoto src="" alt="profilePhoto" />
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
                <UserInfoItem>
                    <UserInfoDescr>Name</UserInfoDescr>
                    <UserInfoLabel>
                        <UserInfoInput type="text" placeholder="Name"/>
                    </UserInfoLabel>
                    <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}}/>
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>Email:</UserInfoDescr>
                    <UserInfoLabel>
                        <UserInfoInput type="text" placeholder="Email:"/>
                    </UserInfoLabel>
                    <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}}/>
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>Birthday:</UserInfoDescr>
                    <UserInfoLabel>
                        <UserInfoInput type="text" placeholder="Birthday: "/>
                    </UserInfoLabel>
                    <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}}/>
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>Phone:</UserInfoDescr>
                    <UserInfoLabel>
                        <UserInfoInput type="text" placeholder="Phone:"/>
                    </UserInfoLabel>
                    <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}}/>
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>City:</UserInfoDescr>
                    <UserInfoLabel>
                        <UserInfoInput type="text" placeholder="City:"/>
                    </UserInfoLabel>
                    <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}}/>
                </UserInfoItem>
                </UserInfoList>
                <LogOutBtn type="button">
                    <FiLogOut style={{color: "#F59256", marginRight: "8px", fontSize: "18px"}} />
                    Log Out
                </LogOutBtn>
                </div>
            </UserBox>
}