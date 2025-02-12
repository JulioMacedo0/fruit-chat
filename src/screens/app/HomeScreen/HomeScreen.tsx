import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function HomeScreen({}: AppScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home</Text>
    </Screen>
  );
}
