import { Box } from 'components/Box';
import { Button } from 'components/common/Button/Button';
import test from 'images/partners/nodeJs.jpg';
import {
  CardTitle,
  Img,
  Like,
  LikeSvg,
  ListElement,
  NameList,
  Status,
  Text,
} from './FindPetCard.styled';

export const FindPetCard = ({ title }) => {
  return (
    <article>
      <Box position="relative">
        <Img src={test} alt="test" />
        <Status>In good hands</Status>
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
            <liListElement mb="0px">
              <Text>Age:</Text>
            </liListElement>
          </NameList>
          <ul>
            <ListElement>
              <Text>Breed</Text>
            </ListElement>
            <ListElement>
              <Text>Place</Text>
            </ListElement>
            <ListElement mb="0px">
              <Text>Age</Text>
            </ListElement>
          </ul>
        </Box>

        <Button
          variant="outline"
          color={'accent'}
          maxWidth={[null, '248px']}
          m={[null, '0 auto 12px']}
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
        >
          Delete
        </Button>
      </Box>
    </article>
  );
};
