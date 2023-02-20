import {useState} from "react"
import {
    AddPetModalBox,
    AddPetModalTitle,
    AddPetodalForm,
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

export const AddUserPetModal = ({onClose}) => {
    const [modalPage, setModalPage] = useState(1)
    const [pets, setPets] = useState([])

    const onSubmit = (evt) => {
        evt.preventDefault()
        const name = evt.target.elements.name.value
        const birthday = evt.target.elements.birthday.value
        const breed = evt.target.elements.breed.value
        const avatarURL = evt.target.elements.avatarURL.value
        const comments = evt.target.elements.comments.value
        const pet = { name, birthday, breed, avatarURL, comments }
        setPets([...pets, pet])
        onClose()
    }
    console.log(pets);

    return (<AddPetModalBox>
        <AddPetModalTitle>Add pet</AddPetModalTitle>
        {modalPage === 1 && (<AddPetodalForm>
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
                    name="birthday"
                    />
                </AddPetModalLabel>
            <AddPetModalLabel>
                Breed
                <AddPetModalTextInput type="text" placeholder="Type breed" name="breed"/>
            </AddPetModalLabel>
                <AddPetodalBtnList>
                    <AddPetodalBtnItem>
                        <AddPetModalOkBtn type="button" onClick={() => setModalPage(2)}>Next</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                        <AddPetModalNoBtn type="button" onClick={onClose}>
                            Cancel
                        </AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetodalForm>)}
            {modalPage === 2 && (<AddPetodalForm>
                <AddPhotoLabel>Add photo and some comments</AddPhotoLabel>
            <AddPetModalLabel>
                <AddPetPhotoBox>
                    <AddPetodalFileInput
                        style={{ visibility: 'hidden' }}
                        accept="image/*"
                        type="file"
                        name="avatarURL"
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
                        <AddPetModalOkBtn type="submit" onSubmit={onSubmit}>Done</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                    <AddPetModalNoBtn type="button" onClick={() => setModalPage(1)}>Back</AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetodalForm>)}
        </AddPetModalBox>
    );
}