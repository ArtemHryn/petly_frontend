import { intervalToDuration } from 'date-fns';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLike } from 'redux/auth/auth-operations';
import {
  getFavorites,
  getIsLoggedIn,
  getUserId,
} from 'redux/auth/authSelector';
import { deleteNotice } from 'redux/notices/notices-operations';
import { getCategory, getNoticeError } from 'redux/notices/noticesSelectors';
import { LearnMoreModal } from '../LearnMoreModal/LearnMoreModal';
import { ModalLayout } from 'components/ModalLayout/ModalLayout';
import { CardItem } from '../NoticesCategoryList/NoticesCategoryList.styled';
import { Box } from 'components/Box';
import { Button } from 'components/common/Button/Button';
import {
  CardTitle,
  DeleteIcon,
  Img,
  IsLikedSvg,
  Like,
  LikeContainer,
  LikeSvg,
  ListElement,
  NameList,
  Status,
  Text,
} from './NoticesPetCard.styled';
import { AnimatePresence } from 'framer-motion';
import { toastError } from 'helpers/toast-notifications/toasts-notifications';

export const NoticePetCard = ({ item }) => {
  const {
    imgURL,
    category,
    title,
    breed,
    location,
    birthdate,
    _id,
    isFavorite,
    owner,
  } = item;
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const categoryName = useSelector(getCategory);
  const userId = useSelector(getUserId);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const error = useSelector(getNoticeError)
  const [showModal, setShowModal] = useState(false);

  if (error) {
  toastError(error)
}

  const getAge = () => {
    const parsedDate = new Date(Date.parse(birthdate));

    const { years, months } = intervalToDuration({
      start: new Date(),
      end: parsedDate,
    });
    if (years < 1) {
      return months > 1 ? `${months} months` : `${months} month`;
    }
    return years > 1 ? `${years} years` : `${years} year`;
  };

  const onLikeClick = () => {
    if (!isLoggedIn) {
      toastError("Yohoho, you aren't still log in ");

      return;
    }
    dispatch(updateLike({ isLiked: favorites.includes(_id), _id }));
  };

  if (categoryName === 'favorite' && !isFavorite) {
    return null;
  }

  return (
    <>
      <CardItem>
        <Box as="article" display="flex" flexDirection={'column'} height="100%">
          <Box position="relative">
            <Img src={imgURL} alt="test" />
            <Status>{category}</Status>
            <Like
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={onLikeClick}
            >
              {isFavorite ? (
                <LikeContainer
                  key="1"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 0.3 } }}
                >
                  <IsLikedSvg />
                </LikeContainer>
              ) : (
                <LikeContainer
                  key="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 0.3 } }}
                >
                  <LikeSvg />
                </LikeContainer>
              )}
            </Like>
          </Box>
          <Box
            pt={['20px']}
            pb={['12px']}
            px={['16px', '20px']}
            flexGrow="1"
            display="flex"
            flexDirection={'column'}
          >
            <CardTitle>{title}</CardTitle>
            <Box display="flex">
              <NameList>
                <ListElement>
                  <Text>Breed:</Text>
                </ListElement>
                <ListElement>
                  <Text>Place:</Text>
                </ListElement>
                <ListElement mb="0px">
                  <Text>Age:</Text>
                </ListElement>
              </NameList>
              <ul>
                <ListElement>
                  <Text>{breed}</Text>
                </ListElement>
                <ListElement>
                  <Text>{location}</Text>
                </ListElement>
                <ListElement mb="0px">
                  <Text>{birthdate ? getAge() : 'no info'}</Text>
                </ListElement>
              </ul>
            </Box>
            <Box
              pt={['20px']}
              pb={['12px']}
              px={['16px', '20px']}
              flexGrow="1"
              display="flex"
              flexDirection={'column'}
              justifyContent="flex-end"
            >
              <Button
                variant="outline"
                color={'accent'}
                display={['flex']}
                maxWidth={[null, '248px']}
                m={[null, '0 auto 12px']}
                mb={['12px', null, null]}
                py={[null, '8px']}
                height="38px"
                fontSize={[null, '16px']}
                onClick={() => setShowModal(true)}
              >
                Learn more
              </Button>
              {owner === userId && (
                <Button
                  variant="outline"
                  color={'accent'}
                  maxWidth={[null, '248px']}
                  m={[null, '0 auto']}
                  py={[null, '8px']}
                  height="38px"
                  fontSize={[null, '16px']}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  onClick={() => dispatch(deleteNotice(_id))}
                >
                  Delete
                  <DeleteIcon />
                </Button>
              )}
            </Box>
          </Box>
        </Box>
      </CardItem>
      <AnimatePresence mode="wait">
        {showModal && (
          <ModalLayout setShowModal={setShowModal}>
            <LearnMoreModal item={item} onLikeClick={onLikeClick} />
          </ModalLayout>
        )}
      </AnimatePresence>
    </>
  );
};
