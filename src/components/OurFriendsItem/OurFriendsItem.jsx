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
    FriendsAddressLink,
} from "./OurFriendItem.styled"

import AllianceLogoHoriz from "../../images/AllianceLogoHoriz.png"

import { useState } from "react";
import { OurFriendTime } from "./OurFriendTime";

const days = ["MN", "TU", "WE", "TH", "FR", "ST", "SU"]

export const OurFriendItem = ({id, partners}) => {
    const [showTime, setShowTime] = useState(false);

    const toggleTime = (evt) => {
        setShowTime(showTime => !showTime);
        if (!showTime) {
            evt.currentTarget.style.color = "#f59256"
        }
        if (showTime) {
            evt.currentTarget.style.color = "#000000"
        }
    };

    const { title, url, addressUrl, imageUrl, address, workDays, phone, email } = partners
    
    const get = () => {
        if (!workDays || workDays.length === 0) {
            const message = "Find us online"
            return [message];
    }

    return days.map((day, index) => {
      if (workDays[index]?.isOpen) {
        return {
          day,
          isOpen: workDays[index].isOpen,
          from: workDays[index].from,
          to: workDays[index].to,
        };
      }
      return { day, isOpen: workDays[index].isOpen };
    });
    };
    
    const workTime = get()
    return (
        <FriendsItem key={id}>
            <h2>
                <FriendsMainLink href={url} target="_blank" rel="noreferrer">{title}</FriendsMainLink>
            </h2>
            <FriendsInfoBox>
                <FriendsLogo src={imageUrl ? imageUrl : {AllianceLogoHoriz}} alt="friendLogo" />
                <FriendsInfoList>
                    <FriendsInfoItem style={{display: "block"}} onClick={(evt) => toggleTime(evt)}>
                        <TimeBtn type="button">Time</TimeBtn>
                        {workDays && workDays.length !== 0 ?
                            (workDays[0].isOpen && `${workDays[0].from}-${workDays[0].to}`) || (!workDays[0].isOpen && `${workDays[6].from}-${workDays[6].to}`) :
                            "---------"}
                    </FriendsInfoItem>
                    <FriendsInfoItem>Address:</FriendsInfoItem>
                    <FriendsInfoItem>
                        <FriendsAddressLink href={addressUrl} target="_blank" rel="noreferrer">{address ? address : "---------"}</FriendsAddressLink>
                    </FriendsInfoItem>
                    <FriendsInfoItem>Email:</FriendsInfoItem>
                    <FriendsInfoItem>
                        <FriendsInfoLink href={`mailto:${email}`}>
                            {email ? email : "---------"}
                        </FriendsInfoLink>
                    </FriendsInfoItem>
                    <FriendsInfoItem>Phone:</FriendsInfoItem>
                    <FriendsInfoItem>
                        <FriendsInfoLink href={`tel:${phone}`}>
                            {phone ? phone : "---------"}
                        </FriendsInfoLink>
                    </FriendsInfoItem>
                </FriendsInfoList>
                    
                {showTime && (
                    <TimeList>
                        {workTime.map(time => {
                            return <OurFriendTime key={time.day || "1"} days={time}/> 
                        })}
                    </TimeList>
                )}
            </FriendsInfoBox>
        </FriendsItem>
    )
}