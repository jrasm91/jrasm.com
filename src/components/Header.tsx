import { Button, Flex, Heading, HStack, Link, useColorModeValue } from '@chakra-ui/react';
import { useColorScheme } from '../hooks';
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
      <HStack>
        <Link mr="2" fontSize="lg" href="https://blog.jrasm.com" isExternal>
          <Button colorScheme={useColorScheme()} variant="link">
            Blog
          </Button>
        </Link>
        <ThemeButton />
      </HStack>
    </Flex>
  );
};
