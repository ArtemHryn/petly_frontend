import { Box } from '../Box';
import { AdditionalLoaderPart, MainLoaderPart } from './MainLoader.styled';

export const MainLoader = () => {
  return (
    <Box position="relative" width="100vw" height="100vh">
      <MainLoaderPart>Petly</MainLoaderPart>
      <AdditionalLoaderPart>Petly</AdditionalLoaderPart>
    </Box>
  );
};
