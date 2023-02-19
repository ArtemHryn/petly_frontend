import {useState} from "react"
import {
    AddPetModalBox,
    AddPetModalTitle,
    AddPetodalForm,
    AddPetModalLabel,
    AddPetodalTextInput,
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

    return (<AddPetModalBox>
        <AddPetModalTitle>Add pet</AddPetModalTitle>
        {modalPage === 1 && (<AddPetodalForm>
            <AddPetModalLabel>
                <ul>
                    <li>Name pet</li>
                    <li><AddPetodalTextInput
                        type="text"
                        placeholder="Type name pet"
                    /></li>
                </ul>
                </AddPetModalLabel>
            <AddPetModalLabel>
                <ul>
                    <li>Date of birth </li>
                    <li><AddPetodalTextInput
                        type="text"
                        placeholder="Type date of birth"
                    /></li>
                </ul>
                </AddPetModalLabel>
            <AddPetModalLabel>
                <ul>
                    <li>Breed</li>
                    <li><AddPetodalTextInput type="text" placeholder="Type breed" /></li>
                </ul>
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
                    />
                </AddPetPhotoBox>
                </AddPetModalLabel>
            <AddPetModalLabel>
                <ul>
                    <li>Comments</li>
                    <li>
                        <AddPetodalTextarea
                        type="text"
                        placeholder="Type comments"
                    />
                    </li>
                </ul>
                </AddPetModalLabel>
                <AddPetodalBtnList>
                    <AddPetodalBtnItem>
                        <AddPetModalOkBtn type="submit">Done</AddPetModalOkBtn>
                    </AddPetodalBtnItem>
                    <AddPetodalBtnItem>
                        <AddPetModalNoBtn type="button">Back</AddPetModalNoBtn>
                    </AddPetodalBtnItem>
                </AddPetodalBtnList>
            </AddPetodalForm>)}
        </AddPetModalBox>
    );
}