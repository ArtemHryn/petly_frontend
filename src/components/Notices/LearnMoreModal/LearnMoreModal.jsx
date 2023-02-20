import { Box } from 'components/Box';
import { Button } from 'components/common/Button/Button';
import { Link } from 'components/common/Link/Link';
import { format } from 'date-fns';
import { IsLikedSvg } from '../NoticesPetCard/NoticesPetCard.styled';
import { CardTitle, Img } from './LearnMoreModal.styled';

const list = [
  'Name:',
  'Birthday:',
  'Breed:',
  'Location:',
  'The sex:',
  'Email:',
  'Phone:',
];


export const LearnMoreModal = ({ item }) => {
  const {
    imgURL,
    category,
    title,
    breed,
    location,
    birthdate,
    // _id,
    // isFavorite,
    // owner,
    name,
    sex,
  } = item;

  const formatedDate = format(new Date(Date.parse(birthdate)), 'dd.MM.yyyy');
  return (
    <>
      <Box>
        <Box>
          <Img src={imgURL} alt={breed} />
          <p>{category}</p>
        </Box>
        <CardTitle>{title}</CardTitle>
        <Box display="flex">
          <ul>
            {list.map(item => (
              <li key={item}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
          <ul>
            <li>
              <p>{name}</p>
            </li>
            <li>
              <p>{formatedDate}</p>
            </li>
            <li>
              <p>{breed}</p>
            </li>
            <li>
              <p>{location}</p>
            </li>
            <li>
              <p>{sex}</p>
            </li>
            <li>
              <p>Some email</p>
            </li>
            <li>
              <p>some phone</p>
            </li>
          </ul>
        </Box>
        <Box>
          <Link
            variant="outline"
            width="100%"
            display="flex"
            justifyContent="center"
            mb="12px"
            href={`tel:${breed}`}
          >
            Contact
          </Link>
          <Button variant="outline">
            Add to <IsLikedSvg />
          </Button>
        </Box>
      </Box>
    </>
  );
};
