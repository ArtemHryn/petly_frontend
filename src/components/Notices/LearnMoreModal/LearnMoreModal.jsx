import { Box } from 'components/Box';
import { format } from 'date-fns';

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
    _id,
    isFavorite,
    owner,
    name,
    sex,
  } = item;

  const formatedDate = format(new Date(Date.parse(birthdate)), 'dd.MM.yyyy');
  return (
    <>
      <Box>
        <Box>
          <img src={imgURL} alt={breed} />
          <p>{category}</p>
        </Box>
        <h4>{title}</h4>
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
          <a href={`tel:${breed}`}>Contact</a>
          <button> Add to 3</button>
        </Box>
      </Box>
    </>
  );
};
