import { Title } from "components/Title/Title";
import { Container } from "components/Container/Container";

import {
    FriendsList,
    NoInfoBox,
    NoInfoText
} from "./OurFriendsPage.styled"
import { useEffect } from "react";
import { OurFriendItem } from "../../components/OurFriendsItem/OurFriendsItem";
import { useDispatch, useSelector } from "react-redux";
import { getSponsors } from "redux/partners/partnersOperations";
import { useRef } from "react";

export const OurFriendsPage = () => {
    const dispatch = useDispatch()
    const partners = useSelector(state => state.sponsors.partners)
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch(getSponsors())
            isFirstRender.current = false
        }
    }, [dispatch])

    return <>
    <Container>
        <Title mb={[11]} fontSize={['24px', '48px', '40px']}>Our friends</Title>
        {partners ? (
            <FriendsList>
            {partners.map(partner => {
                return (<OurFriendItem key={partner._id} partners={partner} />
                    )
                })}
            </FriendsList>) : 
            (<NoInfoBox><NoInfoText>Sorry, searching for the information</NoInfoText></NoInfoBox>)
        }
        </Container>
    </>;
};
