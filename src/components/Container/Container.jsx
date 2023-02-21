import { Box } from 'components/Box';

export const Container = ({ children, ...props }) => {
  return (
    <Box
      as="section"
      pt={[16, 21, '54px']}
      pb={[22, 22, 24]}
      bg="sectionBG"
      flexGrow="1"
      {...props}
    >
      <Box maxWidth={['mob', 'tablet', 'desktop']} m="0 auto" px={[9, 12, 8]}>
        {children}
      </Box>
    </Box>
  );
};
