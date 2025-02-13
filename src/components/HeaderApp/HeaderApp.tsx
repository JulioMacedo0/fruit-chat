import React from 'react';

import {Box, Icon, Text} from '@components';

export function HeaderApp() {
  return (
    <Box mb="s10" flexDirection="row" justifyContent="space-between">
      <Text preset="headingLarge" bold color="primary">
        Fruit Chat
      </Text>
      <Box flexDirection="row" gap="s8">
        <Icon name="Camera" />
        <Icon name="EllipsisVertical" />
      </Box>
    </Box>
  );
}
