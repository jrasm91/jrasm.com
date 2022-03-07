import { useColorModeValue } from '@chakra-ui/react';

export const useColorScheme = () => {
  return useColorModeValue('purple', 'teal');
};
