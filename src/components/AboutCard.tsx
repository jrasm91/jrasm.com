import { Divider, Flex, Heading, ListItem, Tag, UnorderedList } from '@chakra-ui/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './Card';

export function AboutCard() {
  const skills = ['Nebular', 'Angular', 'Bootstrap', 'Nodejs', 'Express', 'Nest'];
  const learning = ['React', 'Chakra', 'Solidity'];

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
          <Flex align="center" wrap="wrap">
            Full stack developer, building applications with javascript.
            {skills.map((skill) => (
              <Tag key={skill} mt="0.25rem" ml="0.25rem">
                {skill}
              </Tag>
            ))}
          </Flex>
        </ListItem>
        <ListItem mb="0.75rem">
          <Flex align="center" wrap="wrap">
            Currently learning
            {learning.map((skill) => (
              <Tag key={skill} mt="0.25rem" ml="0.25rem">
                {skill}
              </Tag>
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
