import { Title } from "components/Title/Title";
import { Container } from "components/Container/Container";
import { useState } from "react";

import {
    FriendsList,
    NoInfoBox,
    NoInfoText
} from "./OurFriendsPage.styled"
import { useEffect } from "react";
import { OurFriendItem } from "../../components/OurFriendsItem/OurFriendsItem";
import { getPartners } from "helpers/getFriends";

export const OurFriendsPage = () => {
    const [partners, setPartners] = useState([])

    useEffect(() => {
        getPartners().then(res => {
            setPartners(res.data.data)
        })
    }, [])
    return <>
    <Container>
        <Title mb={[11]} fontSize={['24px', '48px', '40px']}>Our friends</Title>
        {partners.length !== 0 ? (
            <FriendsList>
            {partners.map(partner => {
                    const {_id, title, url, addressUrl, imageUrl, address, workDays, phone, email} = partner
                    return (<OurFriendItem key={_id} id={_id} title={title} url={url} addressUrl={addressUrl} imageUrl={imageUrl} address={address} workDays={workDays} phone={phone} email={email}/>
                    )
                })}
            </FriendsList>) : 
            (<NoInfoBox><NoInfoText>Sorry, cant't find the information</NoInfoText></NoInfoBox>)
        }
        </Container>
    </>;
};
