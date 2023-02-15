import { useState } from "react";
import {
    FriendsBox,
    FriendsTitle,
    FriendsList,
    FriendsItem,
    FriendsMainLink,
    FriendsInfoBox,
    FriendsLogo,
    FriendsInfoList,
    FriendsInfoItem,
    TimeBtn,
    FriendsInfoLink,
    TimeList,
    TimeItem
} from "./OurFriend.styled"

export const OurFriend = () => {
  const [showTime, setShowTime] = useState(false);
    const [timeId, setTimeId] = useState(null);

    const toggleTime = () => {
        setShowTime(!showTime);
    };

    const openTime = evt => {
        const id = evt.target.getAttribute('id');
        setTimeId(id);
        toggleTime();
  };
  
  return <>
  <FriendsBox>
            <FriendsTitle>Our friends</FriendsTitle>
            <FriendsList>
                {/* map */}

                <FriendsItem>
                    <h2>
                        <FriendsMainLink>title</FriendsMainLink>
                    </h2>
                    <FriendsInfoBox>
                        <FriendsLogo src="" alt="friendLogo" />
                        <FriendsInfoList>
                            <FriendsInfoItem>
                                <TimeBtn
                                    type="button"
                                    onClick={openTime}
                                    id="1"
                                >
                                    time
                                </TimeBtn>
                            </FriendsInfoItem>
                            <FriendsInfoItem>address</FriendsInfoItem>
                            <FriendsInfoItem>
                                Email:{' '}
                                <FriendsInfoLink href="mailto:">
                                    email
                                </FriendsInfoLink>
                            </FriendsInfoItem>
                            <FriendsInfoItem>
                                Phone:{' '}
                                <FriendsInfoLink href="tel:">
                                    tel
                                </FriendsInfoLink>
                            </FriendsInfoItem>
                        </FriendsInfoList>
                        {showTime && timeId === '1' && (
                            <TimeList>
                                <TimeItem>MN</TimeItem>
                                <TimeItem>TU</TimeItem>
                                <TimeItem>WE</TimeItem>
                                <TimeItem>TH</TimeItem>
                                <TimeItem>FR</TimeItem>
                                <TimeItem>SA</TimeItem>
                                <TimeItem>SU</TimeItem>
                            </TimeList>
                        )}
                    </FriendsInfoBox>
                </FriendsItem>
            </FriendsList>
        </FriendsBox>
  </>;
};
