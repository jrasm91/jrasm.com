import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

export const ThemeButton = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      variant="ghost"
      color={useColorModeValue('yellow.500', 'gray.100')}
      fontSize="1.5em"
      borderRadius="50%"
      m="0.25rem"
      icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
      aria-label={'Toggle Theme'}
      onClick={toggleColorMode}
    />
  );
};
