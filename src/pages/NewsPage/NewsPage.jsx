import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from '../../components/Container/Container';
import { Title } from '../../components/Title/Title';
import { NewsItem } from 'components/News/NewsItem';
import { Label, SearchInput, SearchBtnContainer, Button, NewsList } from './NewsPage.styled';

export const NewsPage = () => {

  return <>
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
      
      <NewsList>

        <NewsItem />
        
      </NewsList>
    </Container>
  </>;
};