import { Container } from '../../components/Container/Container';
import { Title } from '../../components/Title/Title';
import { NewsSearch } from 'components/News/NewsSearch';
import { NewsList } from 'components/News/NewsList';

export const NewsPage = () => {

  return (
    <Container>
      <Title
        mb={[11, 15]}
        fontSize={['24px', '48px']}
      >
        News
      </Title>
      <NewsSearch />
      <NewsList />
    </Container>
  )
};