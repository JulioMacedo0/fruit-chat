import React from 'react';

import {Chat} from 'Types';

import {Box, Text} from '@components';

type ChatItemProps = {} & Chat;

export function ChatItem({messages, name}: ChatItemProps) {
  const lastIndexMessage = messages.length - 1;
  const lastMensage =
    messages[lastIndexMessage].content.type === 'text'
      ? messages[lastIndexMessage].content.text
      : messages[lastIndexMessage].content.duration;
  const unreadMessageQtd = messages.filter(
    currentValue => !currentValue.status.read,
  ).length;

  return (
    <Box flexDirection="row" justifyContent="space-between">
      <Box>
        <Text>{name}</Text>
        <Text>{lastMensage}</Text>
      </Box>
      <Box alignContent="flex-end">
        <Text>{messages[messages.length - 1].timestamp}</Text>

        <Box
          borderRadius="s16"
          bg="primary"
          padding="s4"
          justifyContent="center"
          alignItems="center">
          <Text color="grayWhite" preset="paragraphSmall">
            {unreadMessageQtd}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
