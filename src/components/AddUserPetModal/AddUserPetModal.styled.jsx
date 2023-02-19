import styled from "styled-components"
import { theme } from '../../theme';
import Vector from "../../images/Vector.png"

const AddPetModalBox = styled.div`
    width: 280px;
    height: 530px;
    background: #FFFFFF;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 20px 40px;
`;
const AddPetModalTitle = styled.p`
    font-family: ${theme.fonts.main};
    font-weight: 500;
    font-size: 24px;
    line-height: 1.38;
    color: #111111;
    text-align: center;
    margin-bottom: 28px;
`;
const AddPetodalForm = styled.form``;
const AddPetModalLabel = styled.label`
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.47;
    display: flex;
    color: #111111;
`;
const AddPetodalTextInput = styled.input`
    width: 240px;
    height: 40px;
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 40px;
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 11px 14px;
    color: rgba(27, 27, 27, 0.6);

    ::placeholder {
        font-family: ${theme.fonts.main};
        font-weight: 400;
        font-size: 14px;
        line-height: 1.36;
        display: flex;
        align-items: center;
    }
`;
const AddPetPhotoBox = styled.div`
    position: relative;
    width: 208px;
    height: 208px;
    background: #FDF7F2;
    border-radius: 20px;
    margin-left: auto;
    margin-right: auto;
    background-image: url(${Vector});
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto;
    margin-top: 20px;
    margin-bottom: 20px;
`
const AddPhotoLabel = styled.label`
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.47;
    display: flex;
    color: #111111;
    text-align: center;
`
const AddPetodalFileInput = styled.input``;
const AddPetodalTextarea = styled.textarea`
    width: 240px;
    height: 100px;
    background: #FDF7F2;
    border: 1px solid rgba(245, 146, 86, 0.5);
    border-radius: 20px;
    margin-top: 8px;
    margin-bottom: 16px;
    padding: 12px 14px;
    color: rgba(27, 27, 27, 0.6);

    ::placeholder {
        font-family: ${theme.fonts.main};
        font-weight: 400;
        font-size: 14px;
        line-height: 1.36;
        display: flex;
        align-items: center;
    }
`;
const AddPetodalBtnList = styled.ul`
    margin-top: 24px;
`;
const AddPetodalBtnItem = styled.li`
    :not(:last-child) {
        margin-bottom: 12px;
    }
`;
const AddPetModalOkBtn = styled.button`
    width: 240px;
    height: 40px;
    background: #F59256;
    border-radius: 40px;
    border: none;
    color: #FFF;
`;
const AddPetModalNoBtn = styled.button`
    width: 240px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid #F59256;
    border-radius: 40px;
`;

export {
    AddPetModalBox,
    AddPetModalTitle,
    AddPetodalForm,
    AddPetModalLabel,
    AddPetodalTextInput,
    AddPetPhotoBox,
    AddPetodalFileInput,
    AddPhotoLabel,
    AddPetodalTextarea,
    AddPetodalBtnList,
    AddPetodalBtnItem,
    AddPetModalOkBtn,
    AddPetModalNoBtn,
};