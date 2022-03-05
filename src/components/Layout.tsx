import { Box, Divider, useColorModeValue } from '@chakra-ui/react';
import { Header } from './Header';

interface LayoutProps {
  children?: any;
}

export function Layout(props: LayoutProps) {
  const bgGradient = useColorModeValue('', 'linear(to-br, black, blue.900)');
  return (
    <Box bgGradient={bgGradient} pb="4rem" height="full" width="full">
      <Header />
      <Divider />
      <Box m="1rem">{props.children}</Box>
    </Box>
  );
}
