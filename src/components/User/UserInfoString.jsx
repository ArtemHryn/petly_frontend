import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateUser } from "redux/userPage/userOperations"
import { UserDataChangeBtn, UserInfoData, UserInfoDescr, UserInfoInput, UserInfoItem } from "./styles/UserInfoString.styled"
import { FaPen } from 'react-icons/fa';
import { BsCheckLg } from "react-icons/bs";

export const InfoItem = ({item, value}) => {
    const dispatch = useDispatch()
    const [focus, setFocus] = useState(false)
    const onChange = () => {
        setFocus(focus => !focus)
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        const data = evt.target.elements[item].value
        const dataKey = evt.target.elements[item].getAttribute("name");
        
        dispatch(updateUser({[dataKey]: data}))
        setFocus(focus => !focus)
    }
    return <UserInfoItem key={item}>
                    <UserInfoDescr>{item}</UserInfoDescr>
                    {!focus && (<>
            <UserInfoData onDoubleClick={onChange}>{value}</UserInfoData>
                        <UserDataChangeBtn type='button' onClick={onChange} data-id={item}>
                            <FaPen style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}
                            />
                        </UserDataChangeBtn>
                    </>)}
                    {focus && (<form onSubmit={onSubmit} data-id={item}>
                        <UserInfoInput type="text" placeholder={value} name={item} autoFocus />
                        <UserDataChangeBtn type='submit'>
                            <BsCheckLg style={{ background: "#FDF7F2", color: "#F59256", backdropFilter: "blur(2px)", padding: "5px", display: "block", fontSize: "20px", borderRadius: "50%" }}/>
                    </UserDataChangeBtn>
                    </form>)}
                </UserInfoItem>
}