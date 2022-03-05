import { Tag, useColorModeValue } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

export const MyTag = ({ children }: PropsWithChildren<any>) => {
  const colorScheme = useColorModeValue('purple', 'teal');
  return (
    <Tag variant="solid" colorScheme={colorScheme}>
      {children}
    </Tag>
  );
};
