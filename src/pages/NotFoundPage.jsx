import { Box } from 'components/Box';
import { Title } from 'components/Home/HomePage.styled';
import { Link } from 'components/common/Link/Link';

export const NotFoundPage = () => {
  return (
    <>
      <Box
        flexGrow="1"
        as="section"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gridGap="50px"
        bg="sectionBG"
      >
        <Title
          m={['0 auto', '0 auto', '0 auto']}
          width={['fit-content', 'fit-content', 'fit-content']}
        >
          Page Not Found(
        </Title>
        <Link variant="filled" to="/" m="0 auto">
          Go Home
        </Link>
      </Box>
    </>
  );
};
