import { Box } from 'components/Box';
import { Button } from 'components/common/Button/Button';
import { intervalToDuration } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { updateLike } from 'redux/auth/auth-operations';
import { getFavorites } from 'redux/auth/authSelector';
import { deleteNotice } from 'redux/notices/notices-operations';
import { getCategory } from 'redux/notices/noticesSelectors';
import { CardItem } from '../NoticesCategoryList/NoticesCategoryList.styled';
import {
  CardTitle,
  Img,
  IsLikedSvg,
  Like,
  LikeSvg,
  ListElement,
  NameList,
  Status,
  Text,
} from './NoticesPetCard.styled';

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
  } = item;
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const categoryName = useSelector(getCategory);
  const parsedDate = new Date(Date.parse(birthdate));

  const getAge = () => {
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
    dispatch(updateLike({ isLiked: favorites.includes(_id), _id }));
  };

  if (categoryName === 'favorite' && !isFavorite) {
    return null;
  }
  return (
    <CardItem >
      <article>
        <Box position="relative">
          <Img src={imgURL} alt="test" />
          <Status>{category}</Status>
          <Like
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={onLikeClick}
          >
            {isFavorite ? <IsLikedSvg /> : <LikeSvg />}
          </Like>
        </Box>
        <Box pt={['20px']} pb={['12px']} px={['16px', '20px']}>
          <CardTitle>{title}</CardTitle>
          <Box display="flex" mb={['50px']}>
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
                <Text>{getAge()}</Text>
              </ListElement>
            </ul>
          </Box>

          <Button
            variant="outline"
            color={'accent'}
            maxWidth={[null, '248px']}
            m={[null, '0 auto 12px']}
            mb={['12px', null, null]}
            py={[null, '8px']}
            height="100%"
            fontSize={[null, '16px']}
          >
            Learn more
          </Button>
          <Button
            variant="outline"
            color={'accent'}
            maxWidth={[null, '248px']}
            m={[null, '0 auto']}
            py={[null, '8px']}
            height="100%"
            fontSize={[null, '16px']}
            onClick={() => dispatch(deleteNotice(_id))}
          >
            Delete
          </Button>
        </Box>
      </article>
    </CardItem>
  );
};
