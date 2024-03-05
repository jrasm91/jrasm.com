import { Button, Flex, Heading, HStack, IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <Link mr="2" fontSize="lg" href="https://github.com/jrasm91" isExternal>
          <IconButton
            variant="ghost"
            color={useColorModeValue('black', 'white')}
            fontSize="1.5em"
            borderRadius="50%"
            m="0.25rem"
            icon={<FontAwesomeIcon icon={faGithub} />}
            aria-label={'Toggle Theme'}
          />
        </Link>
        <ThemeButton />
      </HStack>
    </Flex>
  );
};
