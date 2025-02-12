import React from 'react';

import {HeaderApp} from 'components/HeaderApp/HeaderApp';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen scrollabe>
      <HeaderApp />
      <Text>Home</Text>
    </Screen>
  );
}
