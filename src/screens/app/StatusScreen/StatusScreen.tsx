import React from 'react';

import {HeaderApp, Screen, Text} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StatusScreen({navigation}: AppTabScreenProps<'StatusScreen'>) {
  return (
    <Screen>
      <HeaderApp
        title="Status"
        textProps={{preset: 'headingLarge', color: 'primary', bold: true}}
      />
      <Text>Status Screen</Text>
    </Screen>
  );
}
