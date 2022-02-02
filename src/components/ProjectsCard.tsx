import { Divider, Heading, ListItem, Tag, TagLabel, UnorderedList } from '@chakra-ui/react';
import { faCode, faFire, faGamepad, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../components';

export function ProjectsCard() {
  const projects = [
    { icon: faLaptopCode, name: 'Vim', description: 'An efficient text editor.', link: 'https://vim.org' },
    { icon: faLaptopCode, name: 'VSCode', description: 'Defacto code editor.', link: 'https://code.visualstudio.com' },
    {
      icon: faCode,
      name: 'Deno',
      description: 'A secure runtime or JavaScript and TypeScript build with V8, Rust, and Tokio.',
      link: 'https://deno.land',
    },
    {
      icon: faGamepad,
      name: 'Phaser',
      description:
        'A fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering.',
      link: 'https://phaser.io',
    },
    {
      icon: faGamepad,
      name: 'RetroPie',
      description: 'An easy way to get retro gaming on a Raspberry Pi.',
      link: 'https://retropi.org.uk',
    },
    {
      icon: faFire,
      name: 'Firebase',
      description: 'An easy to use suite of tools for web and mobile development.',
      link: 'https://firebase.google.com',
    },
  ];
  return (
    <Card>
      <Heading size="md" mb="2">
        <FontAwesomeIcon icon={faCode} style={{ marginRight: '0.5rem', fontSize: '1.125rem' }} />
        Interesting Projects
      </Heading>
      <Divider m="1em 0" />
      <UnorderedList>
        {projects.map(({ name, description, icon, link }) => (
          <ListItem key={name} mb="0.75rem">
            <Tag key={name}>
              <FontAwesomeIcon icon={icon} style={{ marginRight: '0.25rem' }} />
              <TagLabel>{name}</TagLabel>
            </Tag>{' '}
            - {description}
          </ListItem>
        ))}
      </UnorderedList>
    </Card>
  );
}
