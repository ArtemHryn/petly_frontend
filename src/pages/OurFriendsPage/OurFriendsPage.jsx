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
import { parnersList, waiting } from "redux/partners/partnersSelectors";
import { ListLoader } from "components/common/ListLoader/ListLoader";

export const OurFriendsPage = () => {
    const dispatch = useDispatch()
    const partners = useSelector(parnersList)
    const wait = useSelector(waiting)
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (isFirstRender.current) {
            dispatch(getSponsors())
            isFirstRender.current = false
        }
    }, [dispatch])

    return <Container>
        {wait ? (<ListLoader />) : (<>
            <Title mb={[11]} fontSize={['24px', '48px', '40px']}>Our friends</Title>
            {partners ? (<FriendsList>
            {partners.map(partner => (<OurFriendItem key={partner._id} partners={partner} />)
            )}</FriendsList>) : 
            (<NoInfoBox><NoInfoText>Sorry, there is no information</NoInfoText></NoInfoBox>)}
            </>)}
        </Container>
};
