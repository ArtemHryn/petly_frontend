import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Container } from '../../components/Container/Container';
import { Title } from '../../components/Title/Title';
import { NewsSearch } from 'components/News/NewsSearch';
import { NewsItem } from 'components/News/NewsItem';
import { NewsList } from './NewsPage.styled';

import { fetchNews } from 'redux/news/news-operations';
import { selectError, selectIsLoading, selectNews, selectFilter } from 'redux/news/news-selectors';


export const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  // const search = useSelector(selectFilter);
  
   useEffect(() => {
    dispatch(fetchNews());
   }, [dispatch]);
  
  return (
    <Container>
      <Title
        mb={[11, 15]}
        fontSize={['24px', '48px']}
      >
        News
      </Title>

     <NewsSearch />
      {isLoading && !error && <p>Request in progress...</p>}
      <NewsList>
            {news.map(({ _id, title, description, date, url }) => {
              return (
                <NewsItem
                  key={_id}
                  title={title}
                  description={description}
                  date={date}
                  url={url}
                />
              )
            })}
      </NewsList>
    </Container>
  )
};