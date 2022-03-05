import { Divider, Flex, Heading, Link } from '@chakra-ui/react';
import { faGithub, faLinkedin, faStrava, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card } from '../components';
import { MyTag } from './MyTag';

export function SocialCard() {
  const items = [
    { name: 'Twitter', icon: faTwitter, link: 'https://twitter.com/jrasm91' },
    { name: 'Github', icon: faGithub, link: 'https://github.com/jrasm91' },
    { name: 'LinkedIn', icon: faLinkedin, link: 'https://www.linkedin.com/in/jason-rasmussen' },
    { name: 'Strava', icon: faStrava, link: 'https://www.strava.com/athletes/7824214' },
  ];
  return (
    <Card>
      <Heading size="md" mb="2">
        <FontAwesomeIcon icon={faStar} style={{ marginRight: '0.5rem', fontSize: '1.125rem' }} />
        Social
      </Heading>
      <Divider m="1em 0" />
      <Flex wrap="wrap" gap="0.25rem">
        {items.map(({ name, icon, link }) => (
          <Link key={name} href={link} isExternal={true} mr="0.25rem">
            <MyTag>
              <FontAwesomeIcon icon={icon} style={{ marginRight: '0.25rem' }} />
              {name}
            </MyTag>
          </Link>
        ))}
      </Flex>
    </Card>
  );
}
