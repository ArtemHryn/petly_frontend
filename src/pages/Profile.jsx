import { MdPhotoCamera } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { IoTrashSharp } from 'react-icons/io5';
import { AiFillPlusCircle } from 'react-icons/ai';

import {
    UserPageBox,
    UserPageTitle,
    UserBox,
    UserPhotoBox,
    UserPhoto,
    UserPhotoForm,
    UserPhotoLabel,
    UserInfoTable,
    UserInfoTr,
    UserInfoTh,
    UserInfoTd,
    UserInfoInput,
    LogOutBtn,
    PetTitleBox,
    AddPetBox,
    AddPetText,
    AddPetBtn,
    PetList,
    PetItem,
    PetPhoto,
    DeletePetBtn,
    PetInfoList,
    PetInfoItem,

    AddPetModalBox,
  AddPetModalTitle,
  AddPetodalForm,
  AddPetModalLabel,
  AddPetodalTextInput,
  AddPetodalFileInput,
  AddPetodalTextarea,
  AddPetodalBtnList,
  AddPetodalBtnItem,
  AddPetModalOkBtn,
  AddPetModalNoBtn,
} from "./Profile.styled"

export const Profile = () => {
    return <>
    <UserPageBox>
            <UserPageTitle>My information:</UserPageTitle>
            <UserBox>
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
                    <UserInfoTable>
                    <tbody>
                        <UserInfoTr>
                            <UserInfoTh>Name</UserInfoTh>
                            <UserInfoTd>
                                <UserInfoInput type="text" placeholder="name" />
                            </UserInfoTd>
                            <UserInfoTd>
                                <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}} />
                            </UserInfoTd>
                        </UserInfoTr>
                        <UserInfoTr>
                            <UserInfoTh>Email:</UserInfoTh>
                            <UserInfoTd>
                                <UserInfoInput
                                    type="text"
                                    placeholder="Email:"
                                />
                            </UserInfoTd>
                            <UserInfoTd>
                                <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}} />
                            </UserInfoTd>
                        </UserInfoTr>
                        <UserInfoTr>
                            <UserInfoTh>Birthday: </UserInfoTh>
                            <UserInfoTd>
                                <UserInfoInput
                                    type="text"
                                    placeholder="Birthday: "
                                />
                            </UserInfoTd>
                            <UserInfoTd>
                                <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}} />
                            </UserInfoTd>
                        </UserInfoTr>
                        <UserInfoTr>
                            <UserInfoTh>Phone:</UserInfoTh>
                            <UserInfoTd>
                                <UserInfoInput
                                    type="text"
                                    placeholder="Phone:"
                                />
                            </UserInfoTd>
                            <UserInfoTd>
                                <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}} />
                            </UserInfoTd>
                        </UserInfoTr>
                        <UserInfoTr>
                            <UserInfoTh>City:</UserInfoTh>
                            <UserInfoTd>
                                <UserInfoInput
                                    type="text"
                                    placeholder="City:"
                                />
                            </UserInfoTd>
                            <UserInfoTd>
                                <FaPen style={{background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)",  padding:"5px", display: "block", fontSize: "20px", borderRadius: "50%"}} />
                            </UserInfoTd>
                        </UserInfoTr>
                    </tbody>
                </UserInfoTable>
                <LogOutBtn type="button">
                    <FiLogOut style={{color: "#F59256", marginRight: "8px", fontSize: "18px"}} />
                    Log Out
                </LogOutBtn>
                </div>
            </UserBox>
            <PetTitleBox>
                <UserPageTitle>My pets:</UserPageTitle>
                <AddPetBox>
                    <AddPetText>Add pet</AddPetText>
                    <AddPetBtn type="button">
                        <AiFillPlusCircle style={{display: "block", fontSize: "40px", color: "#F59256"}} />
                    </AddPetBtn>
                </AddPetBox>
            </PetTitleBox>
            <PetList>
                {/* map */}

                <PetItem>
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
            </PetList>
        </UserPageBox>
    </>;
};


export const UserModalFirst = () => {
    return (
        <AddPetModalBox>
            <AddPetModalTitle>Add pet</AddPetModalTitle>
            <AddPetodalForm>
                <AddPetModalLabel>
                    <AddPetodalTextInput
                        type="text"
                        placeholder="Type name pet"
                    />
                </AddPetModalLabel>
                <AddPetModalLabel>
                    <AddPetodalTextInput
                        type="text"
                        placeholder="Type date of birth"
                    />
                </AddPetModalLabel>
                <AddPetModalLabel>
                    <AddPetodalTextInput type="text" placeholder="Type breed" />
                </AddPetModalLabel>
                <AddPetodalBtnList>
                    <AddPetodalBtnItem>
                        <AddPetModalOkBtn type="submit">Next</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                        <AddPetModalNoBtn type="button">
                            Cancel
                        </AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetodalForm>
        </AddPetModalBox>
    );
};

export const UserModalSecond = () => {
    return (
        <AddPetModalBox>
            <AddPetModalTitle>Add pet</AddPetModalTitle>
            <AddPetodalForm>
                <AddPetModalLabel>Add photo and some comments</AddPetModalLabel>
                <AddPetModalLabel>
                    <AddPetodalFileInput
                        style={{ visibility: 'hidden' }}
                        accept="image/*"
                        type="file"
                    />
                </AddPetModalLabel>
                <AddPetModalLabel>
                    Comments
                    <AddPetodalTextarea
                        type="text"
                        placeholder="Type comments"
                    />
                </AddPetModalLabel>
                <AddPetodalBtnList>
                    <AddPetodalBtnItem>
                        <AddPetModalOkBtn type="submit">Done</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                        <AddPetModalNoBtn type="button">Back</AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetodalForm>
        </AddPetModalBox>
    );
};