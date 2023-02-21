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


    @media screen and (min-width: 768px) {
        width: 608px;
        height: 570px;
        box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
        border-radius: 40px;
        padding: 40px 80px;
    }

    @media screen and (min-width: 1280px) {
        width: 608px;
        height: 570px;
    }
`;
const AddPetModalTitle = styled.p`
    font-family: ${theme.fonts.main};
    font-weight: 500;
    font-size: 24px;
    line-height: 1.38;
    color: #111111;
    text-align: center;
    margin-bottom: 28px;

    @media screen and (min-width: 1280px) {
        font-size: 36px;
        line-height: 1.36;
        margin-bottom: 40px;
    }
`;
const AddPetModalForm = styled.form`
    text-align: center;
`;
const AddPetModalLabel = styled.label`
    text-align: left;
    display: block;
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.47;
    color: #111111;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1.1;
    }

`;
const AddPetModalTextInput = styled.input`
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

    @media screen and (min-width: 768px) {
        width: 448px;
        height: 48px;
        padding: 11px 16px;
        margin-top: 12px;
        margin-bottom: 28px;

        ::placeholder {
            font-size: 16px;
            line-height: 1.63;
        }
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

    @media screen and (min-width: 768px) {
        width: 182px;
        height: 182px;
    }
`
const AddPhotoLabel = styled.label`
    font-family: ${theme.fonts.main};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.47;
    display: flex;
    color: #111111;
    justify-content: center;

    @media screen and (min-width: 768px) {
        font-size: 24px;
        line-height: 1.1;
    }
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
    resize: none;

    ::placeholder {
        font-family: ${theme.fonts.main};
        font-weight: 400;
        font-size: 14px;
        line-height: 1.36;
        display: flex;
        align-items: center;
    }

    @media screen and (min-width: 768px) {
        width: 394px;
        height: 116px;
        padding: 11px 16px;
        margin-top: 12px;
        margin-bottom: 28px;

        ::placeholder {
            font-size: 16px;
            line-height: 1.63;
        }
    }
`;
const AddPetodalBtnList = styled.ul`
    margin-top: 24px;

    @media screen and (min-width: 768px) {
        display: flex;
        justify-content: center;
    }
`;
const AddPetodalBtnItem = styled.li`
    :not(:last-child) {
        margin-bottom: 12px;
    }

    @media screen and (min-width: 768px) {
        :not(:last-child) {
            margin-bottom: 0;
            margin-right: 20px;
        }
    }
`;
const AddPetModalOkBtn = styled.button`
    font-family: ${theme.fonts.main};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.38;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    padding: 9px 99px;
    background: #F59256;
    border-radius: 40px;
    border: none;
    color: #FFF;

    @media screen and (min-width: 768px) {
        padding: 9px 66px;
        font-size: 20px;
        line-height: 1.35;
    }
`;
const AddPetModalNoBtn = styled.button`
    font-family: ${theme.fonts.main};
    font-weight: 500;
    font-size: 16px;
    line-height: 1.38;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    padding: 9px 90px;
    background: #FFFFFF;
    border: 2px solid #F59256;
    border-radius: 40px;

    @media screen and (min-width: 768px) {
        padding: 9px 66px;
        font-size: 20px;
        line-height: 1.35;
    }
`;

export {
    AddPetModalBox,
    AddPetModalTitle,
    AddPetModalForm,
    AddPetModalLabel,
    AddPetModalTextInput,
    AddPetPhotoBox,
    AddPetodalFileInput,
    AddPhotoLabel,
    AddPetodalTextarea,
    AddPetodalBtnList,
    AddPetodalBtnItem,
    AddPetModalOkBtn,
    AddPetModalNoBtn,
};