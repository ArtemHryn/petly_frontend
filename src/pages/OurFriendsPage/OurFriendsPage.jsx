import { Title } from "components/Title/Title";
import { Container } from "components/Container/Container";
import { useState } from "react";
import nextId from "react-id-generator";
import {
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
    TimeItem,
    NoInfoBox,
    NoInfoText
} from "./OurFriendsPage.styled"
import { useEffect } from "react";
import { getPartners } from "helpers/getFriends";

export const OurFriendsPage = () => {
  const [showTime, setShowTime] = useState(false);
    const [timeId, setTimeId] = useState(null);
    const [partners, setPartners] = useState(null)

    useEffect(() => {
        getPartners().then(res => {
            setPartners(res.data)
        })
    }, [])

    const toggleTime = () => {
        setShowTime(showTime => !showTime);
    };

    const openTime = evt => {
        const id = evt.target.getAttribute('id');
        setTimeId(id);
        toggleTime();
  };
  
  return <>
  <Container>
          <Title mb={[11]} fontSize={['24px', '48px', '40px']}>Our friends</Title>
          {partners ? (
              <FriendsList>
              {partners.map(partner => {
                    const {id, title, url, addressUrl, imageUrl, address, workDays, phone, email} = partner
                    return (
                        <FriendsItem key={nextId()}>
                    <h2>
                        <FriendsMainLink href={url} target="_blank" rel="no-refferer">{title}</FriendsMainLink>
                    </h2>
                    <FriendsInfoBox>
                        <FriendsLogo src={imageUrl} alt="friendLogo" />
                        <FriendsInfoList>
                            <FriendsInfoItem>
                                <TimeBtn
                                    type="button"
                                    onClick={openTime}
                                    id={id}
                                >
                                    Time
                                </TimeBtn>
                            </FriendsInfoItem>
                            <FriendsInfoItem>Address:</FriendsInfoItem>
                            <FriendsInfoItem>{address}</FriendsInfoItem>
                            <FriendsInfoItem>
                                Email:{' '}
                                <FriendsInfoLink href={`mailto:${email}`}>
                                    {email}
                                </FriendsInfoLink>
                            </FriendsInfoItem>
                            <FriendsInfoItem>
                                Phone:{' '}
                                <FriendsInfoLink href={`tel:${phone}`}>
                                    {phone}
                                </FriendsInfoLink>
                            </FriendsInfoItem>
                        </FriendsInfoList>
                        {showTime && timeId === {id} && (
                                    <TimeList>
                                        {workDays.map(day => {
                                            return <TimeItem key={nextId()}>{day}</TimeItem>
                                        })}
                            </TimeList>
                        )}
                    </FriendsInfoBox>
                </FriendsItem>
                    )
                })}
              </FriendsList>) : 
              (<NoInfoBox><NoInfoText>Sorry, cant't find the information</NoInfoText></NoInfoBox>)
          }
        </Container>
  </>;
};
