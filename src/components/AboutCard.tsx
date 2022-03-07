import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Heading, Link, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './Card';
import { MyTag } from './MyTag';

export function AboutCard() {
  const skills = ['Nebular', 'Angular', 'Bootstrap', 'Nodejs', 'Express', 'Nest', 'Chakra', 'React'];
  const learning = ['Solidity', 'Ethers', 'Hardhat', 'MetaMask'];

  const linkColor = useColorModeValue('purple.600', 'teal.200');

  return (
    <Card>
      <Heading size="md" mb="2">
        <FontAwesomeIcon icon={faUser} style={{ marginRight: '0.5rem', fontSize: '1.125rem' }} />
        About
      </Heading>
      <Divider m="1em 0" />
      <UnorderedList>
        <ListItem mb="0.75rem">Husband, father, code ninja, technology enthusiast.</ListItem>
        <ListItem mb="0.75rem">
          <Box>Full stack developer, building applications with javascript.</Box>
          <Flex wrap="wrap" gap="0.25rem">
            {skills.map((skill) => (
              <MyTag key={skill}>{skill}</MyTag>
            ))}
          </Flex>
          <Text mt="1">
            (see my&nbsp;
            <Link color={linkColor} href="https://blog.jrasm.com/posts/web-development-technologies/" isExternal>
              blog post
              <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            for a list of <i>everything</i> I've used)
          </Text>
        </ListItem>
        <ListItem mb="0.75rem">
          <Box>Learning Web3</Box>
          <Flex wrap="wrap" gap="0.25rem">
            {learning.map((skill) => (
              <MyTag key={skill}>{skill}</MyTag>
            ))}
          </Flex>
        </ListItem>
        <ListItem mb="0.75rem">
          I enjoy cycling, hiking, camping, and learning about new technology, electronics, electric vehicles, and crypto.
        </ListItem>
      </UnorderedList>
    </Card>
  );
}
