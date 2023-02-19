import {
    FriendsItem,
    FriendsMainLink,
    FriendsInfoBox,
    FriendsLogo,
    FriendsInfoList,
    FriendsInfoItem,
    TimeBtn,
    FriendsInfoLink,
    TimeList,
    TimeItem,
    FriendsAddressLink,
    TimeSpan,
} from "./OurFriendItem.styled"

import AllianceLogoHoriz from "../../images/AllianceLogoHoriz.png"

import { useState } from "react";

export const OurFriendItem = ({ id, title, url, addressUrl, imageUrl, address, workDays, phone, email }) => {
    const [showTime, setShowTime] = useState(false);

    const toggleTime = () => {
        setShowTime(!showTime);
    };

    const openTime = () => {
        toggleTime();
    };

    return (
        <FriendsItem key={id}>
                    <h2>
                        <FriendsMainLink href={url} target="_blank" rel="noreferrer">{title}</FriendsMainLink>
                    </h2>
                    <FriendsInfoBox>
                        <FriendsLogo src={imageUrl ? imageUrl : {AllianceLogoHoriz}} alt="friendLogo" />
                        <FriendsInfoList>
                            <FriendsInfoItem>
                            <TimeBtn type="button" onClick={openTime}>Time</TimeBtn>
                            </FriendsInfoItem>
                            <FriendsInfoItem>
                                {workDays && workDays.length !== 0 ? `${workDays[6].from}-${workDays[6].to}` : "---------"}
                            </FriendsInfoItem>
                            <FriendsInfoItem>Address:</FriendsInfoItem>
                            <FriendsInfoItem>
                                <FriendsAddressLink href={addressUrl} target="_blank" rel="noreferrer">{address ? address : "---------"}</FriendsAddressLink>
                            </FriendsInfoItem>
                            <FriendsInfoItem>
                                Email:
                                </FriendsInfoItem>
                                <FriendsInfoItem>
                                <FriendsInfoLink href={`mailto:${email}`}>
                                    {email ? email : "---------"}
                                </FriendsInfoLink>
                            </FriendsInfoItem>
                            <FriendsInfoItem>
                                Phone:
                                </FriendsInfoItem>
                                <FriendsInfoItem>
                                <FriendsInfoLink href={`tel:${phone}`}>
                                    {phone ? phone : "---------"}
                                </FriendsInfoLink>
                            </FriendsInfoItem>
                        </FriendsInfoList>
                        {showTime && workDays && workDays.length !== 0 && (
                        <TimeList>
                            <TimeItem><TimeSpan>MN</TimeSpan> {workDays[0].isOpen ? `${workDays[0].from}-${workDays[0].to}` : "----------"}</TimeItem>
                            <TimeItem><TimeSpan>TU</TimeSpan> {workDays[1].isOpen ? `${workDays[1].from}-${workDays[1].to}` : "----------"}</TimeItem>
                            <TimeItem><TimeSpan>WE</TimeSpan> {workDays[2].isOpen ? `${workDays[2].from}-${workDays[2].to}` : "----------"}</TimeItem>
                            <TimeItem><TimeSpan>TH</TimeSpan> {workDays[3].isOpen ? `${workDays[3].from}-${workDays[3].to}` : "----------"}</TimeItem>
                            <TimeItem><TimeSpan>FR</TimeSpan> {workDays[4].isOpen ? `${workDays[4].from}-${workDays[4].to}` : "----------"}</TimeItem>
                            <TimeItem><TimeSpan>SA</TimeSpan> {workDays[5].isOpen ? `${workDays[5].from}-${workDays[5].to}` : "----------"}</TimeItem>
                            <TimeItem><TimeSpan>SU</TimeSpan> {workDays[6].isOpen ? `${workDays[6].from}-${workDays[6].to}` : "----------"}</TimeItem>
                        </TimeList>
                        )}
                        {showTime && !workDays && (
                            <TimeList>
                                <TimeItem>Find us online</TimeItem>
                            </TimeList>)
                        }
                        {showTime && workDays && workDays.length === 0 && (
                            <TimeList>
                                <TimeItem>Find us online</TimeItem>
                            </TimeList>)
                        }
                    </FriendsInfoBox>
                </FriendsItem>
    )
}