import { MdPhotoCamera } from 'react-icons/md';
import { FaPen } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { BsCheckLg } from "react-icons/bs";

import {
    UserBox,
    UserPhotoBox,
    UserPhoto,
    UserPhotoForm,
    UserPhotoLabel,
    UserInfoList,
    UserInfoItem,
    UserInfoDescr,
    UserInfoInput,
    LogOutBtn,
    UserInfoData,
    UserDataChangeBtn} from "./styles/UserInfo.styled"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from 'redux/userPage/userOperations';
import userAvatar from "../../images/userAvatar.png"
import { logout } from 'helpers/axios/logout';


export const UserInfo = () => {
    const [nameFocus, setNameFocus] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)
    const [phoneFocus, setPhoneFocus] = useState(false)
    const [birthdayFocus, setBirthdayFocus] = useState(false)
    const [cityFocus, setCityFocus] = useState(false)
    const dispatch = useDispatch()

    const openInput = (evt) => {
        const id = evt.currentTarget.dataset.id
        switch (id) {
            case "name":
                setNameFocus(nameFocus => !nameFocus)
            break;
            case "email":
                setEmailFocus(emailFocus => !emailFocus)
                break;
            case "phone":
                setPhoneFocus(phoneFocus => !phoneFocus)
                break;
            case "birth":
                setBirthdayFocus(birthdayFocus => !birthdayFocus)
                break;
            case "city":
                setCityFocus(cityFocus => !cityFocus)
                break
            default:
                break;
        }
    }

    const onNameSubmit = (evt) => {
        evt.preventDefault()
        setNameFocus(!nameFocus)
        try {
            const name = evt.target.elements.name.value
            dispatch(updateUser(name))
        } catch (error) {
            console.error(error.message)
        }
    }
    const onEmailSubmit = (evt) => {
        evt.preventDefault()
        try {
            const email = evt.target.elements.email.value
            dispatch(updateUser(email))
            setEmailFocus(!emailFocus)
        } catch (error) {
            console.error(error.message)
        }
    }
    const onPhoneSubmit = (evt) => {
        evt.preventDefault()
        setPhoneFocus(!phoneFocus)
        try {
            const phone = evt.target.elements.phone.value
            dispatch(updateUser(phone))
        } catch (error) {
            console.error(error.message)
        }
    }
    const onBirthSubmit = (evt) => {
        evt.preventDefault()
        setBirthdayFocus(!birthdayFocus)
        try {
            const birthday = evt.target.elements.birth.value
            dispatch(updateUser(birthday))
        } catch (error) {
            console.error(error.message)
        }
    }
    const onCitySubmit = (evt) => {
        evt.preventDefault()
        setCityFocus(!cityFocus)
        try {
            const city = evt.target.elements.city.value
            dispatch(updateUser(city))
        } catch (error) {
            console.error(error.message)
        }
    }
    const logOut = () => {
        logout()
    }

    return <UserBox>
                <UserPhotoBox>
                    <UserPhoto src={userAvatar} alt="profilePhoto" />
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
                    {!nameFocus && (<>
                        <UserInfoData>Name</UserInfoData>
                        <UserDataChangeBtn type='button' onClick={openInput} data-id="name">
                            <FaPen style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}
                            />
                        </UserDataChangeBtn>
                    </>)}
                    {nameFocus && (<form onSubmit={onNameSubmit} data-id="name">
                        <UserInfoInput type="text" placeholder="Name" name="name" autoFocus />
                        <UserDataChangeBtn type='submit'>
                            <BsCheckLg style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}/>
                    </UserDataChangeBtn>
                    </form>)}
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>Email:</UserInfoDescr>
                    {!emailFocus && (<>
                        <UserInfoData>Email</UserInfoData>
                        <UserDataChangeBtn type='button' onClick={openInput} data-id="email">
                            <FaPen style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}
                            />
                        </UserDataChangeBtn>
                    </>)}
                    {emailFocus && (<form onSubmit={onEmailSubmit}>
                        <UserInfoInput type="email" placeholder="Email" name="email" autoFocus />
                        <UserDataChangeBtn type='submit' data-id="email">
                            <BsCheckLg style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}/>
                    </UserDataChangeBtn>
                    </form>)}
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>Birthday:</UserInfoDescr>
                    {!birthdayFocus && (<>
                        <UserInfoData>birth</UserInfoData>
                        <UserDataChangeBtn type='button' onClick={openInput} data-id="birth">
                            <FaPen style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}
                            />
                        </UserDataChangeBtn>
                    </>)}
                    {birthdayFocus && (<form onSubmit={onBirthSubmit}>
                        <UserInfoInput type="text" placeholder="birth" name="birth" autoFocus />
                        <UserDataChangeBtn type='submit' data-id="birth">
                            <BsCheckLg style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}/>
                    </UserDataChangeBtn>
                    </form>)}
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>Phone:</UserInfoDescr>
                    {!phoneFocus && (<>
                        <UserInfoData>Phone</UserInfoData>
                        <UserDataChangeBtn type='button' onClick={openInput} data-id="phone">
                            <FaPen style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}
                            />
                        </UserDataChangeBtn>
                    </>)}
                    {phoneFocus && (<form onSubmit={onPhoneSubmit}>
                        <UserInfoInput type="tel" placeholder="Phone" name="phone" autoFocus />
                        <UserDataChangeBtn type='submit' data-id="phone">
                            <BsCheckLg style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}/>
                    </UserDataChangeBtn>
                    </form>)}
                </UserInfoItem>
                <UserInfoItem>
                    <UserInfoDescr>City:</UserInfoDescr>
                    {!cityFocus && (<>
                        <UserInfoData>City</UserInfoData>
                        <UserDataChangeBtn type='button' onClick={openInput} data-id="city">
                            <FaPen style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}
                            />
                        </UserDataChangeBtn>
                    </>)}
                    {cityFocus && (<form onSubmit={onCitySubmit}>
                        <UserInfoInput type="text" placeholder="City" name="city" autoFocus />
                        <UserDataChangeBtn type='submit' data-id="city">
                            <BsCheckLg style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}/>
                    </UserDataChangeBtn>
                    </form>)}
                </UserInfoItem>
                </UserInfoList>
                <LogOutBtn type="button" onClick={logOut}>
                    <FiLogOut style={{color: "#F59256", marginRight: "8px", fontSize: "18px"}} />
                    Log Out
                </LogOutBtn>
                </div>
            </UserBox>
}