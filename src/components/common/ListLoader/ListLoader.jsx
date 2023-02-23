import { Box } from 'components/Box';
import { RotatingLines } from 'react-loader-spinner';

export const ListLoader = () => {
  return (
    <Box
      width="100%"
          height="100%"
          minHeight='20vh'
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <RotatingLines
        strokeColor="#F59256"
        strokeWidth="5"
        animationDuration="0.75"
        width="180"
        visible={true}
      />
    </Box>
  );
};
