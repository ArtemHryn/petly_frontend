import styled from 'styled-components';
import { theme } from '../../theme';
import cantFind from "../../images/cantFind.jpg"

const FriendsList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: -32px;
    margin-right: -32px;
  }
`;

const NoInfoBox = styled.div`
  width: 280px;
  height: 140px;
  margin-top: 18px;
  margin-bottom: 47px;
  padding: 20px 23px;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;
  background-image: url(${cantFind});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    width: 736px;
    height: 311px;
    border-radius: 40px 0px 0px 40px;
    margin-left: -32px;
    padding: 40px 40px 24px 32px;
    justify-content: start;
  }

  @media screen and (min-width: 1280px) {
    width: 1200px;
    height: 675px;
    margin-left: auto;
    padding: 20px 16px 18px;
    margin-top: 24px;
  }
`

const NoInfoText = styled.p`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.35;
  color: #111111;
  text-align: left;
  margin-bottom: 20px;
  width: 90px;

  @media screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media screen and (min-width: 1280px) {
    text-align: center;
    font-size: 32px;
    width: 300px;
  }
`

export {
  FriendsList,
  NoInfoBox,
  NoInfoText
};


