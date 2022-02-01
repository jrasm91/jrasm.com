import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';

interface LayoutProps {
  children?: any;
}

export function Layout(props: LayoutProps) {
  const { toggleColorMode } = useColorMode();
  return (
    <Box pb="4rem" height="100%" width="100%">
      <Flex wrap="wrap" mb="1rem" align="center" p="2" color={useColorModeValue('gray.800', 'gray.200')}>
        <Box flex="1" display={{ base: 'none', sm: 'flex' }}></Box>
        <Flex flex="1" justify="end">
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
        </Flex>
      </Flex>
      <Box m="1rem">{props.children}</Box>
    </Box>
  );
}
