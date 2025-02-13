import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import {countDigits} from 'helpers/countDigits';
import {Message} from 'Types';

import {Box, Text} from '@components';

type Props = {
  messages: Message[];
};

export function UnreadMessagesCount({messages}: Props) {
  const unreadMessageQtd = messages.filter(
    currentValue => !currentValue.status.read,
  ).length;

  const digitsAmout = countDigits(unreadMessageQtd);

  const $boxStyle: StyleProp<ViewStyle> = {
    aspectRatio: digitsAmout > 2 ? undefined : 1,
    borderRadius: 999,
  };

  return unreadMessageQtd ? (
    <Box
      bg="primary"
      justifyContent="center"
      alignItems="center"
      padding="s6"
      style={$boxStyle}>
      <Text color="grayWhite" preset="paragraphCaptionSmall">
        {unreadMessageQtd}
      </Text>
    </Box>
  ) : (
    <></>
  );
}
