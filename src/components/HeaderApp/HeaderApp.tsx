import React from 'react';

import {Box, Icon, Text, TextProps} from '@components';

type Props = {
  title: string;
  textProps?: TextProps;
};
export function HeaderApp({title, textProps}: Props) {
  return (
    <Box mb="s10" flexDirection="row" justifyContent="space-between">
      <Text {...textProps}>{title}</Text>
      <Box flexDirection="row" gap="s8">
        <Icon name="Camera" />
        <Icon name="EllipsisVertical" />
      </Box>
    </Box>
  );
}
