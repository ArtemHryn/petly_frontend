import styled from 'styled-components';
import { theme } from '../../theme';

const FriendsList = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin-top: -32px;
    margin-right: -32px;
  }
`;
const FriendsItem = styled.li`
  width: 242px;
  padding: 12px 34px 12px 4px;
  background: #ffffff;
  border-radius: 20px;
  margin-left: auto;
  margin-right: auto;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    width: calc(100% / 2 - 64px);
    margin-top: 32px;
    margin-right: 32px;
    margin-left: 0;
    padding: 17px 16px 16px 4px;

    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media screen and (min-width: 1280px) {
    width: calc(100% / 3 - 98px);
  }
`;
const FriendsMainLink = styled.a`
  font-family: ${theme.fonts.main};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #f59256;
  justify-content: center;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
const FriendsInfoBox = styled.div`
  position: relative;
  display: flex;
`;
const FriendsLogo = styled.img`
  width: 110px;
  height: 78px;
  margin-left: 12px;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 85px;
    margin-left: 14px;
  }

  @media screen and (min-width: 1280px) {
    width: 158px;
    height: 115px;
    margin-left: 16px;
  }
`;
const FriendsInfoList = styled.ul``;
const FriendsInfoItem = styled.li`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  color: #000000;

  :not(:last-child) {
    margin-bottom: 4px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;

    :not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.38;

    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;
const TimeBtn = styled.button`
  border: none;
  background-color: transparent;
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;

  :focus {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.36;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.38;
  }
`;
const FriendsInfoLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export {
  FriendsList,
  FriendsItem,
  FriendsMainLink,
  FriendsInfoBox,
  FriendsLogo,
  FriendsInfoList,
  FriendsInfoItem,
  TimeBtn,
  FriendsInfoLink,
};

export const TimeList = styled.ul`
  position: absolute;
  width: 96px;
  top: 35px;
  left: 120px;
  background: #ffffff;
  border: 1px solid #f59256;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  padding: 12px;
`;

export const TimeItem = styled.li`
  font-family: ${theme.fonts.main};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;

  :not(:last-child) {
    margin-bottom: 4px;
  }
`;
