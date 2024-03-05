import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Divider, Flex, Heading, Link, ListItem, Text, UnorderedList, useColorModeValue } from '@chakra-ui/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from './Card';
import { MyTag } from './MyTag';

export function AboutCard() {
  const skills = ['Svelte', 'Angular', 'Bootstrap', 'Nodejs', 'Express.js', 'NestJS', 'Bootstrap', 'Tailwind CSS'];

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
          Core maintainer for{' '}
          <Link color={linkColor} href="https://github.com/immich-app/immich" isExternal>
            Immich
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem mb="0.75rem">
          <Box>Full stack developer, building applications with JavaScript.</Box>
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
        <ListItem mb="0.75rem">I enjoy cycling, hiking, camping, and learning about new technology, and working in open source.</ListItem>
      </UnorderedList>
    </Card>
  );
}
