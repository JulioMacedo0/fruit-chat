import React from 'react';

import {Text} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ChatScreen({navigation, route}: AppScreenProps<'ChatScreen'>) {
  const {participant} = route.params;

  return <Text>ChatScreen {participant.id}</Text>;
}
