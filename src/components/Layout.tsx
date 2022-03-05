import { Box, Divider } from '@chakra-ui/react';
import { Header } from './Header';

interface LayoutProps {
  children?: any;
}

export function Layout(props: LayoutProps) {
  return (
    <Box pb="4rem" height="full" width="full">
      <Header />
      <Divider />
      <Box m="1rem">{props.children}</Box>
    </Box>
  );
}
