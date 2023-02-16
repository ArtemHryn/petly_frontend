import { useParams } from 'react-router-dom';
import { NoticePetCard } from '../NoticesPetCard/NoticesPetCard';
import { CardItem, CardList } from './NoticesCategoryList.styled';

export const filterButtons = [
  { title: 'lost/found', to: 'lost-found' },
  { title: 'in good hands', to: 'for-free' },
  { title: 'sell', to: 'sell' },
  { title: 'favorite ads', to: 'favorite' },
  { title: 'my ads', to: 'own' },
];

export const NoticeCategoryList = () => {
    const { categoryName } = useParams();
    console.log(categoryName);
  return (
    <CardList>
      {filterButtons.map(item => (
        <CardItem key={item.title}>
          <NoticePetCard title={item.title} />
        </CardItem>
      ))}
    </CardList>
  );
};
