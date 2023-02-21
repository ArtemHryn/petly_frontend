import { useState } from "react"
import {useDispatch} from "react-redux"
//import { addPet } from "redux/pets/petsOperations"
import {
    AddPetModalBox,
    AddPetModalTitle,
    AddPetModalForm,
    AddPetModalLabel,
    AddPetModalTextInput,
    AddPetPhotoBox,
    AddPetodalFileInput,
    AddPetodalTextarea,
    AddPetodalBtnList,
    AddPetodalBtnItem,
    AddPetModalOkBtn,
    AddPetModalNoBtn,
    AddPhotoLabel,
} from "./AddUserPetModal.styled"

export const AddUserPetModal = ({ onClose }) => {
//    const dispatch = useDispatch()
    const [modalPage, setModalPage] = useState(1)
    const [pet, setPet] = useState({})
    
    const firstSubmit = (evt) => {
        evt.preventDefault()
        const name = evt.target.elements.name.value
        const date = evt.target.elements.date.value
        const breed = evt.target.elements.breed.value
        const petInfo = { name, date, breed }
        setPet({ ...pet, ...petInfo })
        setModalPage(2)
    }
    const secondSubmit = (evt) => {
        evt.preventDefault()
        const avatarURL = evt.target.elements.avatarURL.files
        const petPhoto = avatarURL[0]
        const comments = evt.target.elements.comments.value
        const petInfo = { petPhoto, comments }
        setPet({ ...pet, ...petInfo })
        onClose()
    }

    return (<AddPetModalBox>
        <AddPetModalTitle>Add pet</AddPetModalTitle>
        {modalPage === 1 && (
            <AddPetModalForm onSubmit={firstSubmit}>
                <AddPetModalLabel>
                Name pet
                <AddPetModalTextInput
                    type="text"
                    placeholder="Type name pet"
                    name="name"
                    />
                </AddPetModalLabel>
            <AddPetModalLabel>
                Date of birth
                <AddPetModalTextInput
                    type="text"
                    placeholder="Type date of birth"
                    name="date"
                    />
                </AddPetModalLabel>
            <AddPetModalLabel>
                Breed
                <AddPetModalTextInput type="text" placeholder="Type breed" name="breed"/>
            </AddPetModalLabel>
                <AddPetodalBtnList>
                    <AddPetodalBtnItem>
                        <AddPetModalOkBtn type="submit">Next</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                        <AddPetModalNoBtn type="button" onClick={onClose}>
                            Cancel
                        </AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetModalForm>
        )}
        {modalPage === 2 && (
            <AddPetModalForm onSubmit={secondSubmit}>
                <AddPhotoLabel>Add photo and some comments</AddPhotoLabel>
            <AddPetModalLabel>
                <AddPetPhotoBox>
                    <AddPetodalFileInput
                        style={{ visibility: 'hidden' }}
                        accept="image/*"
                        type="file"
                        name="avatarURL"
                            encType="multipart/form-data"
                    />
                </AddPetPhotoBox>
                </AddPetModalLabel>
            <AddPetModalLabel style={{display: "grid", justifyContent: "center"}}>
                Comments
                <AddPetodalTextarea
                    type="text"
                    placeholder="Type comments"
                    name="comments"
                    />
            </AddPetModalLabel>
                <AddPetodalBtnList>
                    <AddPetodalBtnItem>
                        <AddPetModalOkBtn type="submit">Done</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                    <AddPetModalNoBtn type="button" onClick={() => setModalPage(1)}>Back</AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetModalForm>
        )}
        </AddPetModalBox>
    );
}
