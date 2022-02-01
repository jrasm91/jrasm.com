import { Divider, Heading, Link, Tag } from '@chakra-ui/react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../components';

export function SocialCard() {
  const items = [
    { name: 'Github', link: 'https://github.com/jrasm91' },
    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/jason-rasmussen' },
    { name: 'Strava', link: 'https://www.strava.com/athletes/7824214' },
  ];
  return (
    <Card>
      <Heading size="md" mb="2">
        <FontAwesomeIcon icon={faStar} style={{ marginRight: '0.5rem', fontSize: '1.125rem' }} />
        Social
      </Heading>
      <Divider m="1em 0" />
      Follow me on{' '}
      {items.map(({ name, link }) => (
        <Link key={name} href={link} isExternal={true} mr="0.25rem">
          <Tag>{name}</Tag>
        </Link>
      ))}
    </Card>
  );
}
