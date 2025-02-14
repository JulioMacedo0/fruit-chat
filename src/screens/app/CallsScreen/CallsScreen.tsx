import React from 'react';

import {Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function CallsScreen({navigation}: AppTabScreenProps<'CallsScreen'>) {
  return (
    <Screen>
      <Text>CallsScreen</Text>
    </Screen>
  );
}
