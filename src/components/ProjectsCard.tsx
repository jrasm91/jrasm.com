import { Divider, Heading, ListItem, TagLabel, UnorderedList } from '@chakra-ui/react';
import { faCode, faFire, faGamepad, faLaptopCode, faList, faSync } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../components';
import { MyTag } from './MyTag';

export function ProjectsCard() {
  const projects = [
    {
      icon: faCode,
      name: 'Deno',
      description: 'A secure runtime or JavaScript and TypeScript build with V8, Rust, and Tokio.',
      link: 'https://deno.land',
    },
    {
      icon: faFire,
      name: 'Firebase',
      description: 'An easy to use suite of tools for web and mobile development.',
      link: 'https://firebase.google.com',
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
      icon: faSync,
      name: 'SyncThing',
      description: 'A free, open-source peer-to-peer file synchronization application.',
      link: 'https://syncthing.net',
    },
    { icon: faLaptopCode, name: 'Vim', description: 'An efficient text editor.', link: 'https://vim.org' },
    { icon: faLaptopCode, name: 'VSCode', description: 'Defacto code editor.', link: 'https://code.visualstudio.com' },
  ];
  return (
    <Card>
      <Heading size="md" mb="2">
        <FontAwesomeIcon icon={faList} style={{ marginRight: '0.5rem', fontSize: '1.125rem' }} />
        Cool Projects
      </Heading>
      <Divider m="1em 0" />
      <UnorderedList>
        {projects.map(({ name, description, icon, link }) => (
          <ListItem key={name} mb="0.75rem">
            <MyTag key={name}>
              <FontAwesomeIcon icon={icon} style={{ marginRight: '0.25rem' }} />
              <TagLabel>{name}</TagLabel>
            </MyTag>{' '}
            - {description}
          </ListItem>
        ))}
      </UnorderedList>
    </Card>
  );
}
