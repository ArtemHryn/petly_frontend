import { Box } from 'components/Box';
import { Button } from 'components/common/Button/Button';
import { useDispatch } from 'react-redux';
import { deleteNotice } from 'redux/notices/notices-operations';
import {
  CardTitle,
  Img,
  Like,
  LikeSvg,
  ListElement,
  NameList,
  Status,
  Text,
} from './NoticesPetCard.styled';

export const NoticePetCard = ({ item }) => {
  const { imgURL, category, title, breed, location, birthdate, _id } = item;
  const dispatch = useDispatch();
  const parsedDate = new Date(Date.parse(birthdate));
  const dateNow = new Date();

  const getAge = () => {
    const totalMonths =
      ((dateNow.getFullYear() - parsedDate.getFullYear()) * 12 -
        parsedDate.getMonth() +
        dateNow.getMonth()) /
        12 >
      12;

    if (totalMonths) {
      return 0;
    }

    if (parsedDate.getMonth() - 1 >= dateNow.getMonth()) {
      return dateNow.getFullYear() - parsedDate.getFullYear() - 1;
    }
    return dateNow.getFullYear() - parsedDate.getFullYear();
  };

  const getMonths = () => {
    if (!getAge() && dateNow.getMonth() < parsedDate.getMonth()) {
      return 12 + dateNow.getMonth() - parsedDate.getMonth();
    }
    if (!getAge() && dateNow.getMonth() === parsedDate.getMonth()) {
      return 1;
    }
    return dateNow.getMonth() - parsedDate.getMonth();
  };


  return (
    <article>
      <Box position="relative">
        <Img src={imgURL} alt="test" />
        <Status>{category}</Status>
        <Like whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <LikeSvg />
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
              <Text>
                {getAge() >= 1 ? (
                  <>
                    ({getAge()} {getAge() > 1 ? 'years' : 'year'})
                  </>
                ) : (
                  <>
                    {getMonths()}
                    {getMonths() > 1 ? 'month' : 'months'}
                  </>
                )}
              </Text>
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
  );
};
