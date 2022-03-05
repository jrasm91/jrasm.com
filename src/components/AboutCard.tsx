import { Box, Divider, Flex, Heading, ListItem, UnorderedList } from '@chakra-ui/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './Card';
import { MyTag } from './MyTag';

export function AboutCard() {
  const skills = ['Nebular', 'Angular', 'Bootstrap', 'Nodejs', 'Express', 'Nest', 'Chakra', 'React'];
  const learning = ['Solidity', 'Ethers', 'Hardhat', 'MetaMask'];

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
