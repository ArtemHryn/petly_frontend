import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from '../../components/Container/Container';
import { Title } from '../../components/Title/Title';
import { NewsItem } from 'components/News/NewsItem';
import { Label, SearchInput, SearchBtnContainer, Button, NewsList } from './NewsPage.styled';
import { fetchNews } from 'redux/news/news-operations';
import { selectError, selectIsLoading, selectNews } from 'redux/news/news-selectors';

export const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

   useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <Container>
      <Title>News</Title>
      <Label>
        <SearchInput
        type="text" 
        name="query"
        placeholder="Search"
        autoComplete="off"
        />
        <SearchBtnContainer>
          <Button type="button">
            <AiOutlineSearch style={{ width: '24px', height: '24px' }}/>
          </Button>
        </SearchBtnContainer>
      </Label>

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