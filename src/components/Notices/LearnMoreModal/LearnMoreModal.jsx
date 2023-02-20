import { Box } from 'components/Box';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import {
  IsLikedSvg,
  LikeContainer,
  LikeSvg,
  Status,
} from '../NoticesPetCard/NoticesPetCard.styled';
import {
  AddTo,
  CardTitle,
  Comment,
  ContactLink,
  Hidden,
  Img,
  ListElement,
  Text,
} from './LearnMoreModal.styled';

export const LearnMoreModal = ({ item, onLikeClick }) => {
  const {
    imgURL,
    category,
    title,
    breed,
    location,
    birthdate,
    // _id,
    isFavorite,
    // owner,
    comments,
    name,
    sex,
    price = null,
  } = item;

  const formatedDate = format(new Date(Date.parse(birthdate)), 'dd.MM.yyyy');
  const list = [
    { title: 'Name:', value: name },
    { title: 'Birthday:', value: formatedDate },
    { title: 'Breed:', value: breed },
    { title: 'Location:', value: location },
    { title: 'The sex:', value: sex },
    { title: 'Email:', value: 'somemail' },
    { title: 'Phone:', value: 'phone' },
    { title: 'price:', value: price },
  ];
  return (
    <>
      <Box display={[null, 'flex']} mb={['28px']}>
        <Box position="relative" mb={['16px']} mr={[null, '20px']}>
          <Img src={imgURL} alt={breed} />
          <Status>{category}</Status>
        </Box>
        <Box>
          <CardTitle>{title}</CardTitle>

          <Box as="ul">
            {list.map(({ title, value }) =>
              !value ? (
                <Hidden key={title}></Hidden>
              ) : (
                <ListElement key={title}>
                  <Text width={['100px', '130px']}>{title}</Text>
                  <Text fontWeight="500">{value}</Text>
                </ListElement>
              )
            )}
          </Box>
        </Box>
      </Box>
      <Comment mb={['40px']}>
        <Comment as="span" fontWeight="600" mr="8px">
          Comments:
        </Comment>
        {comments}
      </Comment>
      <Box display={[null, 'flex']} justifyContent="flex-end">
        <ContactLink
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href={`tel:${breed}`}
        >
          Contact
        </ContactLink>
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <AddTo onClick={() => onLikeClick()}>
            {isFavorite ? 'Remove from' : 'Add to'}
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
          </AddTo>
        </motion.div>
      </Box>
    </>
  );
};
