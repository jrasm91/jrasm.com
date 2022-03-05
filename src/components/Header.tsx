import { Flex, Heading, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { ThemeButton } from './ThemeButton';

export const Header = () => {
  return (
    <Flex
      boxShadow="xl"
      display="flex"
      mb="1"
      p="4"
      justifyContent="space-between"
      alignItems="center"
      color={useColorModeValue('gray.800', 'gray.200')}
    >
      <Heading size="lg">jrasm.com</Heading>
      {/* <Button variant="link">Blog</Button> */}
      <HStack>
        <Link fontSize="lg" href="https://blog.jrasm.com" isExternal>
          Blog
        </Link>
        <ThemeButton />
      </HStack>
    </Flex>
  );
};
